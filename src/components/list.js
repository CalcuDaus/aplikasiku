import React from "react";

class List extends React.Component{
    render(){
        let daftarbuku = [
            {id: 1, judul: "7 in 1 Pemrograman Web Untuk Pemula"},
            {id: 2, judul: "7 in 1 Pemrograman Web Tingkat Lanjut"},
            {id: 3, judul: "Mudah Membuat Aplikasi Android dengan Ionic 3"}
          ];
      
          let daftarebook = [
            "Menguasai React JS Untuk Pemula",
            "Menguasai Vue JS Untuk Pemula",
            "Menguasai React Native Untuk Pemula"
          ];
          return (
            <div>
              <h4>Daftar Judul Buku</h4>
              <ol>
                {daftarbuku.map((buku)=>
                  <li key={buku.id}>
                    {buku.judul}
                  </li>
                )}
              </ol>
      
              <h4>Daftar Judul EBook</h4>
              <ol>
                {daftarebook.map((ebook, index)=>
                  <li key={index}>
                    {ebook}
                  </li>
                )}
              </ol>
            </div>
          );
    }
}

export  default List;