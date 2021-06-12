// Kieu tao ra interface: Class Truu tuong
export class NguoiDung {
  public taiKhoan: string;
  public matKhau: string;
  public hoTen: string;
  public email: string;
  public soDt: string;
  public maLoaiNguoiDung: string;
}
export interface UserParam {
  taiKhoan: string;
}
export class UpdatedUser {
  public taiKhoan: string;
  public matKhau: string;
  public email: string;
  public soDt: string;
  public maNhom: string;
  public maLoaiNguoiDung: string;
  public hoTen: string;
}
