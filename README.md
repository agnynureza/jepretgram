# jepretgram

## RELEASE 0
Sebelum memulai coding buatlah sebuah dokumentasi pada file README.md yang menjelaskan berbagai informasi minimal mengenai :
* Deskripsi dari program yang kita buat,
* Langkah-langkah yang perlu dijalankan untuk menjalankan program tersebut,
* Serta daftar API Endpoint yang bisa diakses untuk mengambil data.

## RELEASE 1 - API Auth
Setelah membuat dokumentasi, sekarang waktunya untuk memulai coding. Buatlah model, controller, dan routing untuk operasi user authentication meliputi register dan juga login. Authentikasi bebas menggunakan teknologi apa saja. Facebook login juga boleh 😆

## RELEASE 2 - API CRUD PHOTO
Buatlah model, controller, dan routing untuk operasi CRUD photo, meliputi `post photo with caption`, `get all photo`, `edit caption`, serta `delete photo`.
Untuk fitur post photo with caption gunakanlah multer untuk upload photo-nya, hasil upload bisa disimpan di server express, Google Cloud Storage, ataupun Amazon S3.

Jika merasa bingung atau kesulitan, boleh melakukan prototyping menggunakan link sebagai sumber photo.

Jangan lupa untuk menambahkan validasi supaya hanya mereka yang memiliki photo tersebut yang dapat mengedit caption, dan juga menghapus photo nya.

## RELEASE 3 -  API ❤️ PHOTO
Buatlah model, controller, dan routing API endpoint untuk sebuah fitur ❤️ photo. Sehingga setiap user nantinya dapat memberikan ❤️ untuk photo user lain yang mereka suka.

## RELEASE 4 - CLIENT SIDE APP
Setelah API yang buat telah memenuhi requirement yang ada pada##  release 1-3 sialakan untuk mebuat sebuah client side app menggunakan Vue.js, dan juga UI framework favorit kamu.

Tampilan tidak perlu terlalu mewah, cukup buat yang sederhana, yang terpenting rapi.

Penggunaan state management tidak diwajibkan tapi memiliki nilai tambah.

## RELEASE 5 - REFACTOR + OPTIONAL FEATURE
Masih memiliki waktu tersisa? Silakan manfaatkan sisa waktu yang ada untuk melakukan refactor, periksa setiap line code yang kamu buat sebelumnya, dan lakukan optimasi jika kamu rasa ada yang bisa kamu tingkatkan lagi kualitas code nya.

Kamu juga boleh menambahkan optional feature seperti comment pada photo, atau memperbaiki tampilan web app yang kamu buat supaya lebih menarik.