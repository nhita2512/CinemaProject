import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../core/service/movie.service';
import { MovieResult, MovieUpdate } from 'src/app/core/model/movie';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-quanlyphim',
  templateUrl: './quanlyphim.component.html',
  styleUrls: ['./quanlyphim.component.scss'],
})
export class QuanlyphimComponent implements OnInit {
  movieObj = new MovieUpdate();
  addForm: FormGroup;
  isLoading: boolean = false;
  ann: string = '';
  error: string = '';
  constructor(private moviesv: MovieService) {
    // taiKhoan, matKhau, email, hoTen, soDt
    this.addForm = new FormGroup({
      maPhim: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      tenPhim: new FormControl('', [
        Validators.required,
        Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z])'),
      ]),
      biDanh: new FormControl('', [Validators.required]),
      trailer: new FormControl('', [Validators.required]),
      hinhAnh: new FormControl('', [Validators.required]),
      moTa: new FormControl('', [Validators?.required]),
      maNhom: new FormControl('', [Validators?.required]),
      ngayKhoiChieu: new FormControl('', [Validators?.required]),
      danhGia: new FormControl('', [Validators.required]),
    });
  }
  movieList: MovieResult[] = [];
  ngOnInit(): void {
    // de lay data cua movie list ve
    // Observable of Angular o da ta se cham: .subcribe de lay data
    this.getMovieList();
  }
  //get Movielist
  getMovieList() {
    this.moviesv.getMovieList().subscribe({
      next: (result) => {
        console.log(result);
        this.movieList = result;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('done');
      },
    });
  }
  //xu ly change file hinhAnh upload
  handleChangeFile(evt: any) {
    const file = evt.target.files;

    this.addForm.value.hinhAnh = file;
  }
  //addmovie to list: hay bi loi hinhAnh ko dung dinh dang

  handleAddMovie() {
    // Gọi API thêm phim
    console.log(this.addForm.value);
    this.moviesv.addMovie(this.addForm.value).subscribe({
      next: () => {
        this.movieList.push(this.addForm.value);
        alert('Them Phim Thanh Cong');
        this.reset();
        this.getMovieList();
      },
      error: (err) => {
        console.log(err);
        alert('Something went wrong');
        this.getMovieList();
      },
    });
  }
  //Xu ly Update phim: Lay data Phim show len form => User chinh sua va save changes -> changes se dc push lai vao movieList
  onEdit(movie: any) {
    this.addForm.controls['maPhim'].setValue(movie.maPhim);
    this.addForm.controls['tenPhim'].setValue(movie.tenPhim);
    this.addForm.controls['biDanh'].setValue(movie.biDanh);
    this.addForm.controls['trailer'].setValue(movie.trailer);
    this.addForm.controls['hinhAnh'].setValue(movie.hinhAnh);
    this.addForm.controls['moTa'].setValue(movie.moTa);
    this.addForm.controls['maNhom'].setValue(movie.maNhom);
    this.addForm.controls['ngayKhoiChieu'].setValue(movie.ngayKhoiChieu);
    this.addForm.controls['danhGia'].setValue(movie.danhGia);

    this.modalShow();
  }
  //update: Http response 404 err
  handleUpdateMovie() {
    this.movieObj.maPhim = this.addForm.value.maPhim;
    this.movieObj.tenPhim = this.addForm.value.tenPhim;
    this.movieObj.biDanh = this.addForm.value.biDanh;
    this.movieObj.trailer = this.addForm.value.trailer;
    this.movieObj.hinhAnh = this.addForm.value.hinhAnh;
    this.movieObj.moTa = this.addForm.value.moTa;
    this.movieObj.maNhom = this.addForm.value.maNhom;
    this.movieObj.ngayKhoiChieu = this.addForm.value.ngayKhoiChieu;
    this.movieObj.danhGia = this.addForm.value.danhGia;
    this.moviesv.updateMovie(this.movieObj, this.movieObj.maPhim).subscribe({
      next: () => {
        this.movieList.push(this.movieObj);
        alert('Update phim thanh cong');
        this.reset();
        this.getMovieList();
      },
      error: (err) => {
        console.log(err);
        alert('Update khong thanh cong');
        this.reset();
      },
    });
  }

  //delete movie of list:done
  handleDeleteMovie(movieId: number) {
    this.moviesv.deleteMovie(movieId).subscribe({
      next: (res) => {
        this.getMovieList();
      },
      error: (error) => {
        console.log(error);
        alert('Something went wrong');
        return;
      },
    });
  }
  //check errors
  checkError(field: string, type?: string) {
    const control = this.addForm.get(field);

    if (type) {
      return control?.errors?.[type];
    }

    return control?.invalid && (control?.touched || control?.dirty);
  }
  //reset
  reset() {
    this.addForm.reset();
  }
  //show modal
  modalShow() {
    document.getElementById('exampleModal').style.display = 'block';
  }
  //hide modal
  modalHide() {
    document.getElementById('exampleModal').style.display = 'none';
  }
}
