<section>
    <h1 class="text--title">SYARAT DAN KETENTUAN</h1>
    @php
        $terms_list = [
            "Semua harga yang tercantum berlaku hanya untuk acara ini dan setelah ditandatangani dan diserahkan kembali pada kami dalam batas waktu yang sudah ditentukan.",
            "Pembayaran dapat dilakukan dengan cash, debit, atau credit card langsung di Reception atau Front Office. Sedangkan Bank Transfers dapat dikirim pada:<br> Bank Account :",
            "<b> Bank BCA Cabang Aeon Mall Sentul (Ole Suites & Cottage)</b> <br> <b> A / C No.  7475-717171 </b> <br> <b> A / N PT. Ole Maju Sejahtera </b>",
            "Pembayaran melalui Bank Transfer baru dianggap diterima setelah dilengkapi dengan dokumen bukti transfer.",
            "HOTEL berhak untuk menyesuaikan harga yang telah disepakati jika ada perubahan perpajakan dari pemerintah yang terjadi sebelum periode kontrak berlalu.",
            "Uang muka (Down Payment) sebesar 50% dari total penawaran 1 bulan sebelum acara, perlu dibayar untuk mengikat reservasi (Uang muka yang telah dibayar tidak dapat dikembalikan ).",
            "Jika reservasi dibatalkan setelah kontrak ini ditandatangani kedua belah pihak, maka dikenakan biaya 100% dari total penawaran.",
            "Pembatalan sepihak dapat dilakukan apabila tidak ada konfirmasi selama 7 hari setelah kontrak ini diterima.",
            "Pembatalan H-14 dikenakan biaya 30% dari Down Payment, Pembatalan H-7 dikenakan 50% dari Down Payment, Pembatalan H-3 dikenakan 100% dari Down Payment.",
            "Untuk perubahan selambat – lambatnya H-30. Apabila ada pengurangan di hari H akan dikenakan charge 100%.",
            "HOTEL akan memberikan pelayanan sebaik-baiknya, namun tidak bertanggung jawab atas kerusakan atau kehilangan barang atau artikel apapun yang di bawa tamu selama atau pada saat acara berlangsung.",
            "HOTEL tidak bertanggung jawab atas kejadian di luar kendali (force majeure) seperti hujan, gempa, terorisme, gerakan demonstrasi, dan sejenisnya.",
            "Tamu bertanggung jawab atas segala kerusakan atau penyusutan atau hilangnya barang yang mungkin disebabkan oleh Peserta, dan akan ditagihkan pada panitia acara.",
            "Tidak diperkenankan memasang apapun di dinding atau di plafon tanpa persetujuan HOTEL sebelumnya.",
            "Dilarang membawa makanan dan minuman dari luar yang mengandung alcohol, apabila terjadi pencemaran dari makanan atau minuman tersebut, maka akan dikenakan biaya restorasi sebesar Rp. 1.000.000,-",
            "<b> Dilarang merokok di area HOTEL baik di dalam ruangan, juga termasuk di dalam kamar (Suite) & Meeting room. Jika terjadi pencemaran rokok, maka akan dikenakan biaya restorasi sebesar Rp. 1.000.000,-. Area merokok disiapkan di area Ruangan terbuka.</b>"
        ];
    @endphp

    <ul class="term-list">
        @foreach ($terms_list as $item)
            <li>
                {!! $item !!}
            </li>
        @endforeach
    </ul>
</section>