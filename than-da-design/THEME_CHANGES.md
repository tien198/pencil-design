# BÁO CÁO THIẾT KẾ UX/UI, TÁI THIẾT LẬP CANVAS & HỆ THỐNG BIẾN MÀU SẮC (THEME REPORT)

**Dự án:** Thiết kế giao diện trang chủ CÔNG TY THAN ĐÁ THÁI BÌNH  
**Website tham khảo cấu trúc:** `https://noithatago.com/`  
**Chế độ thiết kế hiện tại:** **Light Mode (Giao diện sáng công nghiệp cao cấp)**  
**Tập tin cập nhật:** `globals.css`, `design.pen`, `THEME_CHANGES.md`  

---

## 1. Tóm tắt Tái thiết lập Giao diện Canvas (`design.pen`)

Toàn bộ 8 khối giao diện chuẩn Desktop (1440px) đã được tái thiết lập hoàn chỉnh, áp dụng đồng bộ hệ thống biến màu sắc và phông chữ:

1. **Header Info Area (`xrw4Y`):** Bố cục 3 cột tương đồng `div.header-info-area` (Ago):
   - **Cột trái:** Logo thương hiệu **CÔNG TY THAN ĐÁ THÁI BÌNH** kèm biểu tượng ngọn lửa `$brand-flame` (`#FF6000`) và slogan lĩnh vực hoạt động.
   - **Cột giữa:** Ô tìm kiếm chuyên nghiệp với thanh input và nút tìm kiếm nền than tối `$coal-dark`.
   - **Cột phải:** Cụm thông tin liên hệ chuẩn xác: `tel/zalo: 0908607391`, Email `thanthaibinh@gmail.com`, `Website: thandathaibinh24h.vn` cùng khẩu hiệu *"Nguồn cung ổn định - Giá cạnh tranh"*.
2. **Header Navigation Area (`PWdzD`):** Thanh điều hướng chuẩn công nghiệp nền than tối `$nav-bg` (`#333333`) tương đồng `div.header-navigation-area` (Ago):
   - Icon Trang chủ (Lucide `home` màu vàng hổ phách `$ember-gold`).
   - Danh mục menu chữ in hoa chuẩn mực: **TRANG CHỦ**, **SẢN PHẨM THAN** (kèm icon dropdown), **GIỚI THIỆU**, **NĂNG LỰC CUNG ỨNG**, **BÁO GIÁ & VẬN CHUYỂN**, **LIÊN HỆ**.
   - Nút CTA nổi bật *"Nhận báo giá"* màu `$ember-gold` với icon `file-text` và chữ đen `$coal-black` in đậm.
3. **Hero Section (`ankXQ`):** Chiều cao 620px, ảnh nền công nghiệp với lớp phủ tối tinh tế, tiêu đề lớn *"THAN QUẢNG NINH CHẤT LƯỢNG CAO"*, mô tả chuẩn đơn hàng từ 10 tấn trở lên và cụm nút CTA kép.
4. **Stats Bar (`gVkRS`):** Nền vàng than `$ember-gold`, 4 chỉ số năng lực cung ứng (10+ Năm kinh nghiệm, 50.000+ Tấn/năm, 500+ Khách hàng, 5 Loại than).
5. **Banner Showcase Section (`Uz0X5`):** Bố cục Bento/Masonry Grid 2 cột (420px + 860px) gồm 4 banner nổi bật tương phản cao cho nguồn than nội địa và nhập khẩu.
6. **Products Section (`wbpYN`):** Khối 5 thẻ sản phẩm than (Than Quảng Ninh, Than cám, Than Indo, Than Úc, Than Nam Phi) với tag badge phân loại, ảnh mẫu, mô tả chi tiết và CTA *"Nhận báo giá →"*.
7. **Why Us / Criteria Section (`EbDnY`):** Bố cục 3 cột đối xứng (3 tiêu chí trái + Khung ảnh trung tâm + 3 tiêu chí phải) kèm bộ icon Lucide chuyên nghiệp.
8. **Footer & Contact Section (`h3ONM`):** Nền `$cream-mid` (`#EFECE6`), khối thông tin liên hệ đầy đủ pháp lý kèm thẻ CTA nổi bật và thanh bản quyền chân trang.

---

## 2. Bảng biến CSS & Phân loại Màu sắc Thương hiệu

| Tên biến CSS | Mã màu / Giá trị | Vai trò thiết kế & Vị trí sử dụng | Trạng thái |
| :--- | :--- | :--- | :--- |
| `--coal-black` / `$coal-black` | `#0D0D0D` | Chữ trên nền vàng CTA, màu chữ thương hiệu đậm nhất | Có sẵn |
| `--coal-dark` / `$coal-dark` | `#141210` | Màu chữ tiêu đề chính, heading, navbar logo, văn bản đậm | Cập nhật giá trị |
| `--coal-mid` / `$coal-mid` | `#2C2622` | Nền card tối, chữ phụ trong hero | Có sẵn |
| `--ember-gold` / `$ember-gold` | `#C8922A` | Màu nhấn thương hiệu, nút CTA chính, Stats bar, icon hover | Có sẵn |
| `--ember-dark` / `$ember-dark` | `#A67218` | Màu vàng hổ phách đậm cho Eyebrows, Labels, Lucide icons trên nền sáng | **MỚI (NEW)** |
| `--ember-light` / `$ember-light` | `#E8B84B` | Màu viền nhấn, điểm sáng bổ trợ | Có sẵn |
| `--cream` / `$cream` | `#F7F5F0` | Màu nền các section sáng, nền icon badge | Cập nhật giá trị |
| `--cream-mid` / `--surface-muted` | `#EFECE6` | Nền Footer band, nền thẻ phụ, bề mặt xám khoáng sản ấm | **MỚI (NEW)** |
| `--cream-dark` / `$cream-dark` | `#D4C9B8` | Viền kẻ phân cách mờ, chữ phụ trên nền tối | Có sẵn |
| `--white` / `$white` | `#FFFFFF` | Nền Header, Navbar, thẻ sản phẩm, thẻ CTA nổi bật | **MỚI (NEW)** |
| `--nav-bg` / `$nav-bg` | `#333333` | Màu nền thanh điều hướng bổ trợ (khi cần) | **MỚI (NEW)** |
| `--border-warm` / `--border` | `#E5E0D8` | Đường viền phân cách khối, viền thẻ sản phẩm, viền ảnh | Có sẵn |
| `--text-muted` / `$text-muted` | `#5C554E` | Văn bản mô tả nội dung, địa chỉ, thông tin phụ | Cập nhật giá trị |
| `--text-on-dark` / `$text-on-dark` | `#F0EBE2` | Văn bản hiển thị trên nền tối (Hero subtitle, Banner card) | Có sẵn |
| `--brand-flame` / `$brand-flame` | `#FF6000` | Màu cam ngọn lửa biểu tượng logo than khoáng sản | **MỚI (NEW)** |

---

## 3. Danh sách 5 sản phẩm than hiển thị chính xác

1. **Than Quảng Ninh** (Than antraxit khai thác tại Quảng Ninh, độ tỏa nhiệt cao, ít xỉ thải)
2. **Than cám Quảng Ninh** (Cỡ hạt đồng đều, phù hợp cho lò hơi công nghiệp, nung clinker và luyện kim)
3. **Than đá Indonesia** (Nhiệt lượng ổn định, độ bốc cao, nhập khẩu trực tiếp với giá cạnh tranh)
4. **Than đá Úc** (Chất lượng cao cấp, độ tro thấp, nhiệt trị cao cho dây chuyền sản xuất lớn)
5. **Than đá Nam Phi** (Độ tỏa nhiệt cao, hàm lượng lưu huỳnh thấp, đáp ứng tiêu chuẩn khắt khe)

---

## 4. Hệ thống Typography (Kiểu chữ)

- **Display & Headings (`--font-display` / `$font-display`):** `Bricolage Grotesque` (Sans-serif hiện đại, nét mạnh mẽ, phù hợp nhận diện ngành công nghiệp nặng và than đá).
- **Body & Information (`--font-body` / `$font-body`):** `Noto Sans` (Dễ đọc ở mọi kích cỡ, hiển thị chuẩn xác tiếng Việt có dấu).

