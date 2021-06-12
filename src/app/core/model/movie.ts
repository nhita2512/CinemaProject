// Tao cac Interface de cac Class con co the ke thua cac Thuoc tinh & Phuong thuc
export interface MovieResult {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: Date;
  danhGia: number;
}
// showtime
export type MovieShowtime = {
  heThongRapChieu: HeThongRapChieu[];
} & MovieResult;

// Lay thong tin film

export interface HeThongRapChieu {
  cumRapChieu: CumRapChieu[];
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
}

export interface CumRapChieu {
  lichChieuPhim: LichChieuPhim[];
  maCumRap: string;
  tenCumRap: string;
  hinhAnh: null;
}

export interface LichChieuPhim {
  maLichChieu: string;
  maRap: string;
  tenRap: TenRap;
  ngayChieuGioChieu: Date;
  giaVe: number;
  thoiLuong: number;
}

export interface TenRap {
  tenRap: string;
}
export class MovieUpdate {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: Date;
  danhGia: number;
}
