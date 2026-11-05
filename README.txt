LUYEN DE ISTQB CTFL - 202 cau

1. TREN MAY TINH
   Mo index.html bang Chrome/Edge la chay.
   Mo truc tiep file (file://) thi van lam de binh thuong, chi khong cai app / offline duoc.

2. CAI LEN MAN HINH CHINH DIEN THOAI (can HTTPS)
   Tha ca thu muc len host co HTTPS. Vi du tren Baphomet:
     cd istqb-quiz && npx serve -l 8080 .
   roi tro Cloudflare Tunnel vao cong 8080 (hoac copy vao thu muc web cua nginx/caddy).
   Mo link do tren dien thoai:
   - Android (Chrome): hien khung "Them vao man hinh chinh" -> bam Cai dat.
   - iPhone/iPad (Safari): bam nut Chia se -> "Them vao MH chinh".
   Cai xong app mo toan man hinh va lam de duoc ca khi mat mang.

3. ANH CAU HOI
   Thu muc images/ co san anh tam q021.png, q027.png, ... dung ten theo so cau.
   Tai anh goc ve roi ghi de dung ten file. File images/DANH-SACH-ANH.txt ghi
   file nao la cau nao kem link anh goc.
   Muon tai tu dong: bash tai-anh.sh   (chay bang Git Bash)
   Anh .jpg cu doi ten thanh .png van hien thi binh thuong.
   Da cai app tren dien thoai thi mo app khi co mang mot lan de app lay anh moi.

4. CAP NHAT
   Sua index.html xong thi tang so phien ban CACHE trong sw.js (istqb-quiz-v1 -> v2)
   de dien thoai da cai nhan ban moi.

Tien do lam bai luu trong trinh duyet cua tung thiet bi, khong dong bo giua cac may.
