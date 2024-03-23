# RickAndMorty
RickAndMorty açık API'si aracılığıyla ve React Native altyapısı kullanılarak çizgi filmin bölümlerini ve karakterlerini ekranda listeleyerek gösteren bir uygulamadır. Konuşarak Öğren projesinin isterlerine göre hazırlanmıştır. 

 https://rickandmortyapi.com/api/episode API araclığı ile gelen tüm bölümlere ait veriler
uygulamanın ana ekranında pagination(sayfalama) şeklinde listelenmelidir.

● Her bölüme ait tüm karakter ve özelliklerini gösteren kartlar aynı şekilde
pagination(sayfalama) yapılarak listelenmelidir.

● Her bir listeleme için (Bölümler, karakterler vb. ) herhangi bir karakter ismi veya
özelliklerine göre search(arama) işlemini de yapabiliyor olmalıyım.

● Herhangi bir bölümün üzerine tıklandığında o bölüme ait API ye istek atılmalı ve bölüme
ait gelen bilgiler uygulama üzerinde gösterilmelidir. Örnek API için
https://rickandmortyapi.com/api/episode/8 bağlantısını kullanabilirsiniz.

● Açılan bölüm sayfasında bölümde bulunan karakterler listelenmeli ve karaktere
tıklandığında karakter ile ilgili bilgiler API aracılığı ile alarak ekrana dökülmelidir. Örnek
API için https://rickandmortyapi.com/api/character/1 bağlantısını kullanabilirsiniz.


● Uygulama tasarımları tamamen uygulama geliştiriciye bırakılmıştır.

● Pagination işlemi Component olarak oluşturulup, kullanılmalıdır.

● Listeleme sırasında Favori Karakter seçimi yapılabilmelidir.
1

● Maksimum 10 karakter favori olarak eklenebilir. Favori karakter sayısı 10’u geçtiğinde
kullanıcıya “Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden
çıkarmalısınız.” bildirimi gösterilmelidir. (Local Notification)

● Favori karakterleri Redux / Toolkit ve AsyncStorage kullanarak state yönetimi işlemleri
de yapılmalıdır.

● Favori karakterlerin listelendiği Favori Karakterler sayfası olmalıdır. Bu sayfada Sil
butonu yer almalıdır. Silme işlemi yapılmak istendiğinde kullanıcıya “... isimli karakteri
favorilerden kaldırmak istediğinize emin misiniz?” sorusu sorulmalıdır. Evet seçeneği
seçildiğinde karakter listeden silinerek güncel liste ekranda gösterilmelidir. Hayır
seçeneği seçildiğinde herhangi bir işlem yapılmasına gerek yoktur.
