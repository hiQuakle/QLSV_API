// function nauAn() {
//   console.log("Nấu Ăn");
// }
// function giatDo() {
//   setTimeout(() => {
//     console.log("Giặt đồ");
//   }, 3000);
// }
// function ruaChen() {
//   console.log("Rửa chén");
// }

// // nauAn();
// // giatDo();
// // ruaChen();

// //Promise ()
// let promise = new Promise((resolve, reject) => {
//   let diemTrungBinh = 1 + 5;
//   // diemTrungBinh > 7 -> tốt || -> Kém
//   setTimeout(() => {
//     if (diemTrungBinh > 7) {
//       resolve("loại tốt");
//     } else {
//       reject("loại kém");
//     }
//   }, 5000);
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Async Await
// // Restful API (get - post - put - delete)
// async function getDanhSachSinhVien() {
//   try {
//     let promise = await axios({
//       // URL
//       url: "https://svcy.myclass.vn/api/QuanLySinhVien/LayDanhSachSinhVien",
//       // method
//       method: "GET",
//     });
//     console.log(promise);
//     console.log("Hello world");

//     promise.data.map((index, item) => {
//       let content = item;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// getDanhSachSinhVien();

/**Hiển thị danh sách sinh viên trong hệ thống */
function getDataSinhVien() {
  let promise = axios({
    //url: request URL
    url: "https://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
    //method : phương thức ( get - post - put - delete)
    method: "GET",
  });

  // thành công .then | thất bại .catch
  promise
    .then((res) => {
      console.log(res.data);
      renderDataSinhVien(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
getDataSinhVien();

function renderDataSinhVien(arr) {
  let content = "";
  for (let sinhVien of arr) {
    const {
      maSinhVien,
      tenSinhVien,
      email,
      soDienThoai,
      loaiSinhVien,
      diemToan,
      diemLy,
      diemHoa,
      diemRenLuyen,
    } = sinhVien;
    let diemTrungBinh = (diemToan + diemLy + diemHoa) / 3 + diemRenLuyen;
    content += `
    <tr class="">
              <td scope="row">${maSinhVien}</td>
              <td>${tenSinhVien}</td>
              <td>${email}</td>
              <td>${soDienThoai}</td>
              <td>${loaiSinhVien}</td>
              <td>${diemTrungBinh}</td>
              <td>
                <button class="btn btn-danger">Xoá</button>
                <button class="btn btn-warning">Sửa</button>
              </td>
            </tr>
    `;
  }
  document.getElementById("tBody").innerHTML = content;
}

/**Thêm Sih viên vào hệ thống */
function getValueForm() {
  // sinh vien {id : value}
  let arrField = document.querySelectorAll("#QLSV_API input, #QLSV_API select");
  let sinhVien = {};
  for (let field of arrField) {
    const { id, value } = field;
    sinhVien[id] = value;
  }
  console.log(sinhVien);
}
