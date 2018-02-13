function pijitTombol(){
    var name = document.getElementById("nama").value;
    var tempatLahir = document.getElementById("ttl").value;
    var tanggalLahir = document.getElementById("date").value;
    var kelamin = '';
    var telp = document.getElementById("telpon").value;
    var eMail = document.getElementById("mail").value;
    var kitaSD = document.getElementById("sd").value;
    var namaSD = '';
    var kitaLulusSD = document.getElementById("lulus-sd").value;
    var lulusSD = '';
    var kitaSMP = document.getElementById("smp").value;
    var namaSMP = '';
    var kitaLulusSMP = document.getElementById("lulus-smp").value;
    var lulusSMP = '';
    var kitaSMA = document.getElementById("sma").value;
    var namaSMA = '';
    var kitaLulusSMA = document.getElementById("lulus-sma").value;
    var lulusSMA = '';
    var kitaKuliah = document.getElementById("s1").value;
    var namaKuliah = '';
    var kitaLulusKuliah = document.getElementById("lulus-s1").value;
    var lulusKuliah = '';
    var kantor = document.getElementById("nama-perusahaan").value;
    var namaKantor = '';
    var lama = document.getElementById("lama-bekerja").value;
    var lamaKerja = '';
    var position = document.getElementById("posisi").value;
    var posisiKerja = '';

    if(document.getElementById("laki").checked === true){
        kelamin += "Pria";
    }
    else if(document.getElementById("cewe").checked === true){
        kelamin += "Wanita"
    }
    if(document.getElementById("nama-perusahaan").value === kantor && document.getElementById("belum-bekerja").checked === false){
        namaKantor += kantor;
        lamaKerja += lama;
        posisiKerja += position;
    }
    else if(document.getElementById("belum-bekerja").checked === true){
        namaKantor += '';
        lamaKerja += '';
        posisiKerja += '';
    }
    if((document.getElementById("sd").value === kitaSD) && (document.getElementById("belum-sd").checked === false)){
        namaSD += kitaSD;
        lulusSD += kitaLulusSD
    }
    else if(document.getElementById("belum-sd").checked === true){
        namaSD += '';
        lulusSD += '';
    }
    if((document.getElementById("smp").value === kitaSMP) && (document.getElementById("belum-smp").checked === false)){
        namaSMP += kitaSMP;
        lulusSMP += kitaLulusSMP
    }
    else if(document.getElementById("belum-smp").checked === true){
        namaSMP += '';
        lulusSMP += '';
    }
    if((document.getElementById("sma").value === kitaSMA) && (document.getElementById("belum-sma").checked === false)){
        namaSMA += kitaSMA;
        lulusSMA += kitaLulusSMA
    }
    else if(document.getElementById("belum-sma").checked === true){
        namaSMA += '';
        lulusSMA += '';
    }
    if((document.getElementById("s1").value === kitaKuliah) && (document.getElementById("belum-kuliah").checked === false)){
        namaKuliah += kitaKuliah;
        lulusKuliah += kitaLulusKuliah
    }
    else if(document.getElementById("belum-kuliah").checked === true){
        namaKuliah += '';
        lulusKuliah += '';
    }

    document.getElementById("output").innerHTML = 
    `<center><img src="assets1/macan.png" alt="Ini Kucing" width="200" height="200"></center><br>`
    document.getElementById("output1").innerHTML = `
    <fieldset>
        <legend><h3> Personal Data </h3></legend>
        <table>
            <tr>
                <td width="150"> Nama </td>
                <td> : </td>
                <td> ${name} </td>
            </tr>
            <tr>
                <td width="150"> Tempat/Tanggal Lahir </td>
                <td> : </td>
                <td width="200"> ${tempatLahir}, &nbsp&nbsp ${tanggalLahir}</td>
            </tr>
            <tr>
                <td width="150"> Kelamin </td>
                <td> : </td>
                <td width="100"> ${kelamin} </td>
            </tr>
            <tr>
                <td width="150"> Telephone </td>
                <td> : </td>
                <td width="100"> ${telp} </td>
            </tr>
            <tr>
                <td width="150"> Email </td>
                <td> : </td>
                <td width="100"> ${eMail} </td>
            </tr>
        </table>
    </fieldset>
    <fieldset>
        <legend><h3> Riwayat Pendidikan </h3></legend>
        <table>
            <tr>
                <td width="150"> Sekolah Dasar </td>
                <td> : </td>
                <td> ${namaSD} </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td width="100"> Tahun Lulus </td>
                <td> : </td>
                <td> ${lulusSD} </td>
            </tr>
            <tr>
                <td width="200"> Sekolah Menengah Pertama</td>
                <td> : </td>
                <td> ${namaSMP} </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td width="100"> Tahun Lulus </td>
                <td> : </td>
                <td> ${lulusSMP} </td>
            </tr>
            <tr>
                <td width="150"> Sekolah Menengah Atas </td>
                <td> : </td>
                <td> ${namaSMA} </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td width="100"> Tahun Lulus </td>
                <td> : </td>
                <td> ${lulusSMA} </td>
            </tr>
            <tr>
                <td width="150"> Perguruan Tinggi </td>
                <td> : </td>
                <td> ${namaKuliah} </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td width="100"> Tahun Lulus </td>
                <td> : </td>
                <td> ${lulusKuliah} </td>
            </tr>
        </table>
    </fieldset>
    <fieldset>
        <legend><h3> Riwayat Pekerjaan </h3></legend>
        <table>
            <tr>
                <td width="150"> Nama Perusahaan </td>
                <td> : </td>
                <td> ${namaKantor} </td>
            </tr>
            <tr>
                <td width="150"> Lama Bekerja </td>
                <td> : </td>
                <td> ${lamaKerja} </td>
            </tr>
            <tr>
                <td width="150"> Posisi </td>
                <td> : </td>
                <td width="100"> ${posisiKerja} </td>
            </tr>
        </table>
    </fieldset>
    `

}