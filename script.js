/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  SCRIPT.JS — HỆ THỐNG DỮ LIỆU & LOGIC ĐIỀU KHIỂN HOÀN CHỈNH
 *  Dự án: Bách Khoa Toàn Thư Lịch Sử Việt Nam Điện Tử
 *  Phiên bản: 3.0 — Đầy đủ, Hoàn thiện, Mở rộng tối đa
 * ═══════════════════════════════════════════════════════════════════════════
 *
 *  MỤC LỤC:
 *   1.  Cơ sở dữ liệu lịch sử (historyData) — 15 sự kiện trọng đại
 *   2.  Dữ liệu chi tiết mở rộng (detailData) — nội dung modal đầy đủ
 *   3.  Danh nhân anh hùng (figuresData) — 8 nhân vật + nội dung chi tiết
 *   4.  Danh ngôn lịch sử (quotesData) — 5 câu nói bất hủ
 *   5.  Khởi tạo & render dữ liệu động (DOMContentLoaded)
 *   6.  Hàm render timeline
 *   7.  Hàm render danh nhân
 *   8.  Điều khiển modal lịch sử
 *   9.  Điều khiển modal danh nhân
 *  10.  Bộ lọc & tìm kiếm sự kiện
 *  11.  Slider danh ngôn
 *  12.  Hiệu ứng scroll reveal
 *  13.  Thanh điều hướng (navbar) thông minh
 *  14.  Thanh tiến trình đọc (reading progress bar)
 *  15.  Bộ đếm số liệu thống kê (animated counter)
 *  16.  Điều hướng bàn phím (keyboard navigation)
 *  17.  Lazy loading hình ảnh & tối ưu hiệu năng
 *  18.  Quản lý trạng thái bộ lọc & tìm kiếm kết hợp
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════════
//  1. CƠ SỞ DỮ LIỆU LỊCH SỬ TRỌNG ĐẠI (TIMELINE DATA)
// ═══════════════════════════════════════════════════════════════════
const historyData = [
  {
    year: "~2879 TCN",
    title: "Kinh Dương Vương & Nhà nước Văn Lang",
    desc: "Buổi bình minh của dòng giống Tiên Rồng — thủy tổ khai sáng quốc gia đầu tiên của người Việt.",
    type: "dynasty",
    badge: "HUYỀN SỬ",
    content: `
      <p><b>1. Thủy tổ dân tộc:</b> Kinh Dương Vương (tên húy Lộc Tục) lên làm vua vào năm 2879 TCN, lấy tên nước là <b>Xích Quỷ</b>, đóng đô tại vùng Ngàn Hống. Đây được coi là vị vua sáng lập quốc gia đầu tiên trong lịch sử Việt Nam.</p><br>
      <p><b>2. Truyền thuyết Con Rồng Cháu Tiên:</b> Con trai Kinh Dương Vương là <b>Lạc Long Quân</b> kết duyên cùng <b>Âu Cơ</b>, sinh ra bọc trăm trứng, nở ra một trăm người con — nguồn gốc thiêng liêng của hai tiếng <i>"Đồng bào"</i> và huyền thoại <i>"Con Rồng cháu Tiên"</i>.</p><br>
      <p><b>3. Nhà nước Văn Lang:</b> Người con trưởng lên ngôi, hiệu là <b>Hùng Vương</b>, đặt tên nước là <b>Văn Lang</b>, đóng đô ở Phong Châu (Phú Thọ). Thời đại Hùng Vương trải qua 18 đời vua với những giá trị văn hóa bất hủ: lễ hội Đền Hùng, bánh chưng bánh giầy, tín ngưỡng thờ cúng tổ tiên.</p><br>
      <p><b>4. Di sản văn hóa:</b> UNESCO đã công nhận <i>Tín ngưỡng thờ cúng Hùng Vương</i> là Di sản văn hóa phi vật thể đại diện của nhân loại (năm 2012). Ngày 10 tháng 3 âm lịch là Quốc giỗ của toàn dân tộc.</p>
    `
  },
  {
    year: "257 TCN",
    title: "Thục Phán An Dương Vương & Nước Âu Lạc",
    desc: "Thành Cổ Loa hình xoáy ốc kỳ bí và nỏ thần liên châu bảo vệ giang sơn.",
    type: "dynasty",
    badge: "TRIỀU ĐẠI",
    content: `
      <p><b>1. Thống nhất Lạc Việt và Tây Âu:</b> <b>Thục Phán</b> hợp nhất hai bộ tộc, lên ngôi hiệu là <b>An Dương Vương</b>, đổi quốc hiệu thành <b>Âu Lạc</b>, khẳng định sự kế thừa và phát triển từ nhà nước Văn Lang.</p><br>
      <p><b>2. Xây dựng Thành Cổ Loa:</b> Nhà vua cho dời đô xuống vùng đồng bằng, xây kinh thành <b>Cổ Loa</b> (Đông Anh, Hà Nội) với kiến trúc 3 vòng xoáy ốc độc đáo bậc nhất Đông Nam Á thời bấy giờ, bao quanh là hệ thống hào sâu chống giặc.</p><br>
      <p><b>3. Nỏ thần Liên Châu:</b> Thần Kim Quy dâng móng rùa, An Dương Vương cho chế tạo <b>nỏ thần</b> bắn một lần được nhiều mũi tên, sức mạnh vô địch, khiến quân Triệu Đà nhiều lần thất bại xâm lược.</p><br>
      <p><b>4. Bài học lịch sử:</b> Sự sụp đổ của Âu Lạc do mắc mưu kẻ thù qua câu chuyện Mỵ Châu — Trọng Thủy là bài học đắt giá muôn đời về cảnh giác với gian kế nội thù, bảo vệ bí mật quốc gia.</p>
    `
  },
  {
    year: "40 SCN",
    title: "Khởi Nghĩa Hai Bà Trưng Thần Tốc",
    desc: "Tiếng trống đồng Mê Linh phá tan ách đô hộ nghìn năm nhà Hán — nữ vương đầu tiên của đất Việt.",
    type: "war",
    badge: "KHÁNG CHIẾN",
    content: `
      <p><b>1. Nguyên nhân nổ ra:</b> Trước ách cai trị tàn bạo của Thái thú <b>Tô Định</b> và mối thù giết chồng (Thi Sách), <b>Trưng Trắc</b> cùng em gái <b>Trưng Nhị</b> phất cờ khởi nghĩa tại Mê Linh vào mùa xuân năm 40 SCN.</p><br>
      <p><b>2. Lời thề thiêng liêng tại bến Hát Giang:</b><br>
      <i style="margin-left:1rem; display:block; border-left:3px solid #D4AF37; padding-left:1rem; line-height:2.2;">
        "Một xin rửa sạch thù nhà<br>
        Hai xin dựng lại nghiệp xưa họ Hùng<br>
        Ba kẻo oan ức lòng chồng<br>
        Bốn xin vẻn vẹn sở công lênh này"
      </i></p><br>
      <p><b>3. Chiến công hiển hách:</b> Chỉ trong thời gian ngắn, nghĩa quân giải phóng <b>65 thành trì</b>, quét sạch quân Hán ra khỏi bờ cõi. Trưng Trắc lên ngôi nữ vương — vị nữ vương đầu tiên trong lịch sử Việt Nam, đóng đô ở Mê Linh.</p><br>
      <p><b>4. Ý nghĩa:</b> Dù nền độc lập chỉ giữ được 3 năm trước khi Mã Viện đem quân tái chiếm, cuộc khởi nghĩa là biểu tượng ngàn đời cho tinh thần bất khuất và câu nói bất hủ: <i>"Giặc đến nhà đàn bà cũng đánh."</i></p>
    `
  },
  {
    year: "248 SCN",
    title: "Bà Triệu Khởi Nghĩa — Cưỡi Voi Đánh Giặc Ngô",
    desc: "Nữ anh hùng cưỡi voi trận, khí thế kinh thiên động địa trước quân Đông Ngô.",
    type: "war",
    badge: "KHÁNG CHIẾN",
    content: `
      <p><b>1. Khí phách ngút trời:</b> <b>Triệu Thị Trinh</b> (Bà Triệu) khởi nghĩa chống lại nhà Đông Ngô tàn bạo tại vùng núi Nưa (Thanh Hóa). Bà nổi tiếng với hình ảnh mặc áo giáp vàng, cưỡi voi, xông pha trận mạc uy dũng.</p><br>
      <p><b>2. Tuyên ngôn hào hùng bất hủ:</b><br>
      <i style="margin-left:1rem; display:block; border-left:3px solid #D4AF37; padding-left:1rem; line-height:1.9;">"Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông, đánh đuổi quân Ngô, giành lại giang sơn, cởi ách nô lệ, chứ không chịu khom lưng làm tì thiếp người ta!"</i></p><br>
      <p><b>3. Trận chiến oanh liệt:</b> Cuộc khởi nghĩa kéo dài gần 6 tháng, giao chiến với quân Ngô hơn 30 trận. Bà mất năm 23 tuổi nhưng tinh thần bất khuất của bà mãi được tôn vinh và thờ phụng.</p><br>
      <p><b>4. Di sản:</b> Triệu Thị Trinh được nhân dân lập đền thờ tại núi Tùng (Thanh Hóa). Tên tuổi bà sánh ngang với Hai Bà Trưng trong lịch sử phụ nữ Việt Nam hào hùng.</p>
    `
  },
  {
    year: "542 SCN",
    title: "Lý Nam Đế Khai Sinh Nước Vạn Xuân",
    desc: "Lập triều đại nhà Tiền Lý tự chủ, đặt tên nước mang ước vọng trường tồn muôn thuở.",
    type: "dynasty",
    badge: "TRIỀU ĐẠI",
    content: `
      <p><b>1. Khởi nghĩa thành công:</b> <b>Lý Bí</b> (Lý Bôn) lãnh đạo nhân dân khởi nghĩa năm 542, đánh đuổi quân đô hộ nhà Lương trong vòng 3 tháng, giải phóng hoàn toàn giang sơn sau 5 thế kỷ Bắc thuộc.</p><br>
      <p><b>2. Thành lập quốc gia tự chủ:</b> Năm 544, ông lên ngôi Hoàng đế, lấy hiệu là <b>Lý Nam Đế</b>, đặt tên nước là <b>Vạn Xuân</b> — ước mơ quốc gia độc lập trường tồn đến vạn mùa xuân bất tận.</p><br>
      <p><b>3. Xây dựng đất nước:</b> Lý Nam Đế xây dựng triều đình với đầy đủ quan chế, định lại phép tắc, truyền bá Phật giáo. Ông cho dựng chùa Trấn Quốc (Hà Nội) — ngôi chùa cổ nhất Thủ đô ngày nay.</p><br>
      <p><b>4. Ý nghĩa lịch sử:</b> Nhà Tiền Lý đánh dấu bước ngoặt quan trọng: lần đầu tiên một người Việt xưng Đế, ngang hàng Thiên tử Trung Hoa, khẳng định chủ quyền dân tộc.</p>
    `
  },
  {
    year: "938 SCN",
    title: "Đại Thắng Sông Bạch Đằng — Ngô Quyền",
    desc: "Kế sách cọc nhọn thiên tài, chấm dứt hơn 1.000 năm Bắc thuộc tối tăm.",
    type: "independence",
    badge: "ĐỘC LẬP",
    content: `
      <p><b>1. Kế sách thiên tài:</b> <b>Ngô Quyền</b> huy động quân dân đóng hàng ngàn cọc gỗ đầu bịt sắt nhọn xuống lòng sông Bạch Đằng, bố trí theo thế trận tận dụng sự lên xuống của thủy triều.</p><br>
      <p><b>2. Diễn biến trận đánh:</b> Khi thủy triều lên, quân ta dùng thuyền nhỏ nhử địch tiến sâu vào trận địa. Khi triều rút mạnh, thuyền chiến Nam Hán tháo chạy, va vào cọc nhọn vỡ tan. <b>Hoằng Tháo</b> — con trai vua Nam Hán — tử trận ngay trên sông Bạch Đằng.</p><br>
      <p><b>3. Tầm vóc lịch sử:</b> Chiến thắng này chính thức chấm dứt hơn <b>1.067 năm Bắc thuộc</b> (từ năm 111 TCN đến 938 SCN), mở ra kỷ nguyên độc lập tự chủ lâu dài cho dân tộc Việt Nam. Ngô Quyền lên ngôi vua, đóng đô tại Cổ Loa.</p><br>
      <p><b>4. Đánh giá:</b> Nhà sử học Lê Văn Hưu nhận định: <i>"Ngô Quyền có thể gọi là người hùng của một thời vậy!"</i>. Sông Bạch Đằng trở thành dòng sông huyền thoại, 3 lần ghi chiến công oanh liệt của dân tộc.</p>
    `
  },
  {
    year: "968 SCN",
    title: "Đinh Tiên Hoàng Đế Định Quốc Đại Cồ Việt",
    desc: "Dẹp loạn 12 sứ quân từ tuổi thơ ấu, thống nhất giang sơn, xưng đế ngang thiên tử.",
    type: "dynasty",
    badge: "TRIỀU ĐẠI",
    content: `
      <p><b>1. Loạn 12 sứ quân:</b> Sau khi Ngô Quyền mất, đất nước rơi vào cảnh cát cứ của <b>12 sứ quân</b> — 12 thế lực phong kiến địa phương tranh giành quyền lực, đẩy nhân dân vào cảnh loạn lạc, khổ đau.</p><br>
      <p><b>2. Đinh Bộ Lĩnh dẹp loạn:</b> Xuất thân từ vùng núi Hoa Lư (Ninh Bình), <b>Đinh Bộ Lĩnh</b> từ nhỏ đã nổi tiếng tài lược, dùng mía làm kiếm tập trận. Ông lần lượt dẹp tan 12 sứ quân, thống nhất đất nước.</p><br>
      <p><b>3. Lập quốc Đại Cồ Việt:</b> Năm 968, ông lên ngôi hoàng đế, lấy hiệu là <b>Đinh Tiên Hoàng</b>, đặt tên nước là <b>Đại Cồ Việt</b>, đóng đô tại Hoa Lư, đặt niên hiệu riêng — lần đầu tiên trong lịch sử Việt Nam tự xưng <i>Đế</i> ngang hàng với Hoàng đế Trung Hoa.</p><br>
      <p><b>4. Di sản:</b> Đinh Tiên Hoàng xây dựng bộ máy nhà nước hoàn chỉnh, đặt nền móng cho sự phát triển vững chắc của các triều đại Lê, Lý, Trần sau này.</p>
    `
  },
  {
    year: "1010 SCN",
    title: "Lý Công Uẩn Ban Bố 'Thiên Đô Chiếu'",
    desc: "Dời đô ra Thăng Long — bước ngoặt chiến lược mở ra thời đại hưng thịnh nghìn năm.",
    type: "culture",
    badge: "VĂN HÓA",
    content: `
      <p><b>1. Quyết định dời đô:</b> Vua <b>Lý Thái Tổ</b> (Lý Công Uẩn) nhận thấy Hoa Lư chật hẹp không xứng tầm kinh đô, đã ban bố <i>Chiếu dời đô</i> — tác phẩm chính luận bất hủ thể hiện tầm nhìn chiến lược vĩ đại.</p><br>
      <p><b>2. Thăng Long — Rồng bay lên:</b> Khi thuyền rồng cập bến thành Đại La, nhà vua nhìn thấy rồng vàng bay lên, đổi tên thành <b>Thăng Long</b> (Rồng bay lên). Từ đây, Thăng Long trở thành kinh đô trường tồn hơn <b>800 năm</b> của đất nước.</p><br>
      <p><b>3. Thời đại hưng thịnh nhà Lý:</b> Dưới triều Lý, Phật giáo phát triển rực rỡ, Văn Miếu — Quốc Tử Giám được xây dựng (1070), chế độ thi cử Nho học được thiết lập, kinh tế — văn hóa phồn thịnh chưa từng có.</p><br>
      <p><b>4. Di sản ngàn năm:</b> Thăng Long — Hà Nội ngày nay được UNESCO công nhận là Di sản văn hóa thế giới (2010). Câu nói trong Chiếu dời đô: <i>"Muốn mưu toan việc lớn, tính kế muôn đời cho con cháu"</i> vẫn còn vang vọng đến ngày nay.</p>
    `
  },
  {
    year: "1077 SCN",
    title: "Phòng Tuyến Sông Như Nguyệt — Hùng Văn Thiên Cổ",
    desc: "Bản Tuyên ngôn Độc lập đầu tiên vang vọng, 30 vạn quân Tống tan tác.",
    type: "war",
    badge: "KHÁNG CHIẾN",
    content: `
      <p><b>1. Chiến lược phủ đầu táo bạo:</b> Thái úy <b>Lý Thường Kiệt</b> chủ trương <i>"Tiến công trước để tự vệ"</i> — đem quân đánh thẳng vào căn cứ hậu cần của Tống tại Ung Châu, Liêm Châu, Khâm Châu, phá tan kế hoạch xâm lược của địch.</p><br>
      <p><b>2. Bài thơ thần — Tuyên ngôn Độc lập đầu tiên:</b> Tại phòng tuyến sông Như Nguyệt, giữa đêm khuya từ đền thờ thần vang lên:<br>
      <i style="margin-left:1rem; display:block; border-left:3px solid #D4AF37; padding-left:1rem; line-height:2; margin-top:0.5rem;">"Nam quốc sơn hà Nam đế cư<br>Tuyệt nhiên định phận tại thiên thư<br>Như hà nghịch lỗ lai xâm phạm<br>Nhữ đẳng hành khan thủ bại hư"</i></p><br>
      <p><b>3. Đại thắng:</b> Quân Tống tan vỡ hoàn toàn. Lý Thường Kiệt chủ động cầu hòa, giành lại toàn bộ lãnh thổ và 6 châu bị chiếm trước đó.</p><br>
      <p><b>4. Đánh giá:</b> Giáo sư Trần Văn Giàu nhận định đây là <i>"tuyên ngôn độc lập đầu tiên của dân tộc Việt Nam"</i>, khẳng định chủ quyền và ngang bằng vị thế quốc gia với Trung Hoa.</p>
    `
  },
  {
    year: "1258 – 1288",
    title: "Ba Lần Đại Thắng Quân Mông — Nguyên Hùng Mạnh",
    desc: "Hào khí Đông A rực lửa — Sát Thát! — nhấn chìm đế quốc Mông Cổ mạnh nhất thế giới.",
    type: "war",
    badge: "KHÁNG CHIẾN",
    content: `
      <p><b>1. Thử thách kinh hoàng:</b> Đế quốc Mông Cổ đã chinh phục hầu hết châu Á và châu Âu. Đại Việt nhỏ bé phải đối mặt với đội quân bách chiến bách thắng được mệnh danh là <i>"quân đội mạnh nhất thế giới"</i>.</p><br>
      <p><b>2. Hội nghị Diên Hồng — Tinh thần toàn dân:</b> Vua Trần triệu tập các bô lão toàn quốc về Thăng Long hỏi ý kiến kháng chiến hay hàng giặc. Tiếng hô đồng thanh <b>"Đánh!"</b> của hàng nghìn bô lão vang dậy trời đất, khắc sâu vào lịch sử dân tộc.</p><br>
      <p><b>3. Ba lần đại thắng:</b><br>
      — <b>1258:</b> Đánh tan quân Mông Cổ lần 1 tại Đông Bộ Đầu (chiến thuật vườn không nhà trống).<br>
      — <b>1285:</b> Hưng Đạo Đại Vương chỉ huy phản công, tiêu diệt 50 vạn quân Nguyên.<br>
      — <b>1288:</b> Trận Bạch Đằng huyền thoại — toàn bộ thủy quân Nguyên tan tành, bắt sống Ô Mã Nhi.</p><br>
      <p><b>4. Hịch Tướng Sĩ bất hủ:</b> Trần Hưng Đạo viết: <i>"Ta thường tới bữa quên ăn, nửa đêm vỗ gối, ruột đau như cắt..."</i> — áng văn thể hiện tinh thần xả thân vì nước cao cả nhất lịch sử.</p>
    `
  },
  {
    year: "1428 SCN",
    title: "Lê Lợi Hoàng Đế & Áng Văn 'Bình Ngô Đại Cáo'",
    desc: "10 năm nằm gai nếm mật kháng chiến Lam Sơn — bản Tuyên ngôn Độc lập thứ hai hào hùng.",
    type: "independence",
    badge: "ĐỘC LẬP",
    content: `
      <p><b>1. Khởi nghĩa Lam Sơn (1418–1427):</b> <b>Lê Lợi</b> dựng cờ khởi nghĩa tại vùng núi Lam Sơn (Thanh Hóa). Trải qua 10 năm kháng chiến gian khổ, ông được sự phò tá đắc lực của mưu thần <b>Nguyễn Trãi</b> — chiến lược <i>"công tâm vi thượng"</i> vừa đánh vừa vận động địch về hàng.</p><br>
      <p><b>2. Bình Ngô Đại Cáo — Tuyên ngôn Độc lập thứ hai:</b> Nguyễn Trãi thừa lệnh soạn thảo kiệt tác văn học chính trị bất hủ với câu mở đầu hào hùng:<br>
      <i style="margin-left:1rem; display:block; border-left:3px solid #D4AF37; padding-left:1rem; line-height:1.9; margin-top:0.5rem;">"Việc nhân nghĩa cốt ở yên dân<br>Quân điếu phạt trước lo trừ bạo<br>Như nước Đại Việt ta từ trước<br>Vốn xưng nền văn hiến đã lâu..."</i></p><br>
      <p><b>3. Nhà Lê sơ thịnh trị:</b> Lê Lợi lên ngôi (Lê Thái Tổ), lập ra nhà Lê — triều đại tồn tại lâu dài nhất lịch sử Việt Nam (360 năm). Dưới đời Lê Thánh Tông, <i>Bộ luật Hồng Đức</i> được ban hành — bộ luật tiến bộ nhất Đông Nam Á thời bấy giờ.</p><br>
      <p><b>4. Di sản:</b> UNESCO công nhận Nguyễn Trãi là Danh nhân văn hóa thế giới (1980). Bình Ngô Đại Cáo được coi là <i>"bản tuyên ngôn về quyền con người đầu tiên của nhân loại"</i>.</p>
    `
  },
  {
    year: "1789 SCN",
    title: "Quang Trung Tây Sơn Đại Phá 29 Vạn Quân Thanh",
    desc: "Cuộc hành quân thần tốc lừng lẫy lịch sử — anh hùng áo vải dựng lại sơn hà.",
    type: "war",
    badge: "ĐẠI THẮNG",
    content: `
      <p><b>1. Thần tốc lên đường:</b> Nhận tin 29 vạn quân Thanh tràn vào chiếm Thăng Long, <b>Nguyễn Huệ</b> lên ngôi Hoàng đế (Quang Trung) rồi lập tức xuất quân. Từ Phú Xuân (Huế) ra Thăng Long, quân Tây Sơn hành quân <b>600km trong 40 ngày</b> — kỳ tích quân sự chấn động.</p><br>
      <p><b>2. Đại phá trong 5 ngày Tết Kỷ Dậu (1789):</b> Quân Tây Sơn chia làm 5 đạo tiến công, đêm 30 Tết tổng tấn công bất ngờ:<br>
      — Đồn Hà Hồi bị hạ trong đêm không tốn một mũi tên<br>
      — Đồn Ngọc Hồi — Đống Đa vỡ hoàn toàn mùng 5 Tết<br>
      — Tướng Tàu <b>Sầm Nghi Đống</b> tự tử, <b>Tôn Sĩ Nghị</b> bỏ ấn bạc chạy tháo thân qua cầu phao</p><br>
      <p><b>3. Tầm vóc lịch sử:</b> Giải phóng Thăng Long trưa mùng 5 Tết, <b>sớm hơn dự kiến 2 ngày</b>. Đây được xếp vào một trong những chiến thắng quân sự vĩ đại nhất lịch sử Đông Nam Á.</p><br>
      <p><b>4. Hội Gò Đống Đa:</b> Hàng năm vào mùng 5 Tết, nhân dân Hà Nội tổ chức lễ hội Gò Đống Đa để tưởng nhớ chiến công hiển hách này.</p>
    `
  },
  {
    year: "1945 SCN",
    title: "Cách Mạng Tháng Tám & Tuyên Ngôn Độc Lập",
    desc: "Khai sinh nước Việt Nam Dân Chủ Cộng Hòa — bước ngoặt vĩ đại nhất thế kỷ XX.",
    type: "independence",
    badge: "ĐỘC LẬP",
    content: `
      <p><b>1. Bối cảnh lịch sử:</b> Sau khi Nhật Bản đầu hàng Đồng minh (tháng 8/1945), Đảng Cộng sản Đông Dương phát động Tổng khởi nghĩa. Chỉ trong <b>15 ngày</b> (19/8 – 2/9/1945), cách mạng thắng lợi hoàn toàn trên cả nước.</p><br>
      <p><b>2. Ngày 2/9/1945 — Lịch sử sang trang:</b> Tại Quảng trường Ba Đình lịch sử, trước hơn <b>50 vạn đồng bào</b>, Chủ tịch <b>Hồ Chí Minh</b> trịnh trọng đọc bản <i>Tuyên ngôn Độc lập</i>, khai sinh nước <b>Việt Nam Dân chủ Cộng hòa</b>.</p><br>
      <p><b>3. Nội dung Tuyên ngôn Độc lập:</b> Bản Tuyên ngôn trích dẫn Tuyên ngôn Độc lập Mỹ (1776) và Tuyên ngôn Nhân quyền Pháp (1791), khẳng định quyền tự quyết và vị thế pháp lý của Việt Nam trước toàn thế giới.</p><br>
      <p><b>4. Ý nghĩa lịch sử:</b> Đây là cuộc cách mạng dân tộc dân chủ triệt để nhất châu Á, chấm dứt hoàn toàn ách thực dân Pháp gần 80 năm và ách phong kiến hàng nghìn năm, mở ra kỷ nguyên mới độc lập, tự do cho nhân dân Việt Nam.</p>
    `
  },
  {
    year: "7/5/1954",
    title: "Chiến Thắng Điện Biên Phủ Chấn Động Địa Cầu",
    desc: "56 ngày đêm 'khoét núi, ngủ hầm' — đập tan pháo đài bất khả xâm phạm của thực dân.",
    type: "war",
    badge: "CHIẾN THẮNG",
    content: `
      <p><b>1. Tập đoàn cứ điểm 'bất khả xâm phạm':</b> Thực dân Pháp xây dựng Điện Biên Phủ thành pháo đài khổng lồ gồm <b>49 cứ điểm</b>, được mệnh danh là <i>"cối xay thịt"</i> — nơi quân Việt Minh sẽ bị tiêu diệt hoàn toàn theo tính toán của Navarre.</p><br>
      <p><b>2. Quyết định thiên tài:</b> Đại tướng <b>Võ Nguyên Giáp</b> thay đổi phương châm từ <i>"đánh nhanh thắng nhanh"</i> sang <i>"đánh chắc tiến chắc"</i> — một quyết định dũng cảm và sáng suốt nhất lịch sử. Hàng vạn chiến sĩ kéo pháo bằng tay qua núi rừng trong bí mật.</p><br>
      <p><b>3. Chiến dịch 56 ngày đêm:</b><br>
      — <b>Đợt 1 (13–17/3):</b> Tiêu diệt Him Lam, Độc Lập, Bản Kéo<br>
      — <b>Đợt 2 (30/3–30/4):</b> Siết chặt vòng vây<br>
      — <b>Đợt 3 (1–7/5):</b> Tổng công kích, Tướng De Castries bị bắt sống</p><br>
      <p><b>4. Tầm vóc thế giới:</b> Chiến thắng Điện Biên Phủ <i>"lừng lẫy năm châu, chấn động địa cầu"</i>, buộc Pháp ký Hiệp định Giơ-ne-vơ (21/7/1954), chấm dứt hoàn toàn thực dân Pháp tại Đông Dương.</p>
    `
  },
  {
    year: "30/4/1975",
    title: "Chiến Dịch Hồ Chí Minh — Đại Thắng Mùa Xuân",
    desc: "11 giờ 30 phút ngày 30/4 — non sông thu về một mối sau 30 năm kháng chiến trường kỳ.",
    type: "independence",
    badge: "THỐNG NHẤT",
    content: `
      <p><b>1. Chiến dịch quy mô lớn nhất:</b> Chiến dịch Hồ Chí Minh lịch sử huy động <b>5 cánh quân</b> với hơn 270.000 chiến sĩ, hàng trăm xe tăng, pháo hạng nặng tiến vào Sài Gòn từ nhiều hướng đồng loạt.</p><br>
      <p><b>2. Giờ phút lịch sử:</b> Đúng <b>11h30 ngày 30/4/1975</b>, xe tăng số hiệu 843 và 390 húc đổ cổng Dinh Độc Lập. Chiến sĩ <b>Bùi Quang Thận</b> trèo lên nóc dinh cắm cờ giải phóng. Tổng thống <b>Dương Văn Minh</b> tuyên bố đầu hàng vô điều kiện.</p><br>
      <p><b>3. Non sông liền một dải:</b> Kết thúc cuộc chiến tranh yêu nước vĩ đại nhất trong lịch sử Việt Nam (1945–1975), giải phóng hoàn toàn miền Nam. Năm 1976, Tổng tuyển cử thống nhất đất nước, đổi tên nước thành <b>Cộng hòa Xã hội Chủ nghĩa Việt Nam</b>.</p><br>
      <p><b>4. Ý nghĩa lịch sử toàn cầu:</b> Chiến thắng của nhân dân Việt Nam trước siêu cường quân sự lớn nhất thế giới được coi là <i>"sự kiện chấn động thế kỷ XX"</i>, cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên toàn thế giới.</p>
    `
  }
];


// ═══════════════════════════════════════════════════════════════════
//  3. DANH NHÂN ANH HÙNG DÂN TỘC (FIGURES DATA) — 8 nhân vật
// ═══════════════════════════════════════════════════════════════════
const figuresData = [
  {
    icon: "⚔️",
    name: "Trần Hưng Đạo",
    era: "1228 – 1300",
    desc: "Quốc công Tiết chế, tác giả 'Hịch tướng sĩ' bất hủ. Linh hồn của 3 lần đại thắng quân Mông–Nguyên, được nhân dân tôn thờ là Đức Thánh Trần.",
    detail: `
      <p><b>Tên đầy đủ:</b> Trần Quốc Tuấn — con trai An Sinh Vương Trần Liễu, cháu nội vua Trần Thái Tông.</p><br>
      <p><b>Thiên tài quân sự:</b> Được phong <b>Quốc công Tiết chế</b> — tổng chỉ huy toàn bộ quân đội trong cả 3 cuộc kháng chiến chống Mông–Nguyên. Ông viết bộ binh thư <i>Binh thư yếu lược</i> và <i>Vạn Kiếp bí truyền</i> — kinh điển quân sự Đại Việt.</p><br>
      <p><b>Hịch tướng sĩ:</b> Tác phẩm là áng văn chính luận hào hùng nhất lịch sử. Ông viết: <i>"Ta thường tới bữa quên ăn, nửa đêm vỗ gối, ruột đau như cắt, nước mắt đầm đìa..."</i></p><br>
      <p><b>Phép dùng binh:</b> Năm 1285, khi Thượng hoàng hỏi kế chống giặc, ông tâu: <i>"Bệ hạ muốn hàng thì hãy chém đầu thần trước đã!"</i> — tấm lòng son sắt vì nước.</p><br>
      <p><b>Di sản:</b> Sau khi mất, được nhân dân tôn thờ là <b>Đức Thánh Trần</b>. Đền Kiếp Bạc (Hải Dương) là nơi thờ chính — một trong những ngôi đền linh thiêng nhất Việt Nam.</p>
    `
  },
  {
    icon: "🖋️",
    name: "Nguyễn Trãi",
    era: "1380 – 1442",
    desc: "Danh nhân văn hóa thế giới UNESCO 1980 — tác giả Bình Ngô Đại Cáo, khai quốc công thần nhà Lê, nhà chính trị quân sự thiên tài.",
    detail: `
      <p><b>Sự nghiệp hiển hách:</b> Nguyễn Trãi (hiệu Ức Trai) là nhà chính trị, quân sự, ngoại giao, văn học thiên tài. Ông theo phò Lê Lợi từ những ngày đầu gian khổ nhất của cuộc khởi nghĩa Lam Sơn.</p><br>
      <p><b>Chiến lược 'công tâm':</b> Ông đề xuất và thực hiện chiến lược <i>"lấy đại nghĩa thắng hung tàn, lấy chí nhân thay cường bạo"</i> — vừa đánh vừa vận động quân địch đầu hàng, tiết kiệm xương máu tối đa.</p><br>
      <p><b>Di sản văn học:</b> Tác giả <i>Bình Ngô Đại Cáo, Quốc âm thi tập, Ức Trai thi tập, Dư địa chí</i>... đặt nền móng cho nền văn học chữ Nôm và văn học yêu nước Việt Nam.</p><br>
      <p><b>Kết cục bi thương:</b> Năm 1442, bị vu oan trong vụ án <b>Lệ Chi Viên</b> — bị tru di tam tộc. Mãi năm 1464, vua Lê Thánh Tông mới minh oan, phục hồi danh dự. Câu thơ ông viết lúc cuối đời thật xúc động: <i>"Bui một tấc lòng ưu ái cũ, Đêm ngày cuồn cuộn nước triều đông."</i></p><br>
      <p><b>Vinh danh quốc tế:</b> UNESCO công nhận là Danh nhân văn hóa thế giới năm 1980.</p>
    `
  },
  {
    icon: "🔥",
    name: "Quang Trung — Nguyễn Huệ",
    era: "1753 – 1792",
    desc: "Hoàng đế thiên tài, người anh hùng áo vải — hành quân thần tốc xóa sổ 29 vạn đại quân nhà Thanh trong 5 ngày Tết Kỷ Dậu 1789.",
    detail: `
      <p><b>Xuất thân và sự nghiệp:</b> Nguyễn Huệ — em út trong 3 anh em nhà Tây Sơn, thiên tài quân sự bẩm sinh. Từ cuộc khởi nghĩa ở Tây Sơn (Bình Định), ông lần lượt thống nhất đất nước từ Nam ra Bắc.</p><br>
      <p><b>Kỳ tích quân sự vĩ đại nhất:</b> Hành quân hơn 600km từ Phú Xuân ra Thăng Long chỉ trong 40 ngày, đại phá 29 vạn quân Thanh trong <b>5 ngày Tết Kỷ Dậu</b> — kỳ tích chưa từng có trong lịch sử chiến tranh thế giới.</p><br>
      <p><b>Tầm nhìn canh tân đất nước:</b> Dù làm vua chỉ 4 năm (1788–1792), ông đã có những cải cách táo bạo: đề cao chữ Nôm, mở rộng giáo dục, phát triển kinh tế, tạo đội ngũ nhân tài như La Sơn Phu Tử Nguyễn Thiếp.</p><br>
      <p><b>Mất quá sớm:</b> Vua Quang Trung đột ngột băng hà năm 39 tuổi, để lại niềm tiếc thương vô hạn. Lịch sử tự hỏi: nếu ông sống thêm, Việt Nam sẽ thay đổi đến đâu?</p>
    `
  },
  {
    icon: "📖",
    name: "Nguyễn Du",
    era: "1766 – 1820",
    desc: "Đại thi hào dân tộc — tác giả Truyện Kiều 3.254 câu thơ lục bát bất hủ, được UNESCO vinh danh Danh nhân văn hóa thế giới 2015.",
    detail: `
      <p><b>Cuộc đời và thời đại:</b> Nguyễn Du (tự Tố Như, hiệu Thanh Hiên) sinh tại Hà Tĩnh, xuất thân quan lại quý tộc. Ông sống qua giai đoạn lịch sử biến động nhất: Lê mạt — Tây Sơn — Nguyễn sơ.</p><br>
      <p><b>Truyện Kiều — kiệt tác muôn đời:</b> Tác phẩm 3.254 câu thơ lục bát kể về số phận đau thương của <b>Thúy Kiều</b> — đại diện cho bao thân phận phụ nữ trong xã hội phong kiến. Câu mở đầu bất hủ: <i>"Trăm năm trong cõi người ta, Chữ tài chữ mệnh khéo là ghét nhau."</i></p><br>
      <p><b>Tấm lòng nhân đạo sâu sắc:</b> Qua Truyện Kiều, Nguyễn Du gửi gắm triết lý nhân sinh: <i>"Chữ tâm kia mới bằng ba chữ tài"</i> — tài năng không bằng tấm lòng nhân ái.</p><br>
      <p><b>Di sản và vinh danh:</b> UNESCO công nhận Nguyễn Du là Danh nhân văn hóa thế giới (2015). Truyện Kiều đã được dịch ra hơn 20 ngôn ngữ trên thế giới.</p>
    `
  },
  {
    icon: "🏔️",
    name: "Hồ Chí Minh",
    era: "1890 – 1969",
    desc: "Anh hùng giải phóng dân tộc vĩ đại — Người cha già kính yêu, người tìm ra con đường cứu nước, lãnh đạo nhân dân giành độc lập, thống nhất đất nước.",
    detail: `
      <p><b>Hành trình tìm đường cứu nước:</b> Năm 1911, người thanh niên <b>Nguyễn Tất Thành</b> rời Bến Nhà Rồng với đôi bàn tay trắng, bôn ba khắp 5 châu 4 biển suốt 30 năm, tìm con đường giải phóng dân tộc.</p><br>
      <p><b>Tuyên ngôn Độc lập 2/9/1945:</b> Người đọc bản Tuyên ngôn tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa. Câu hỏi giữa chừng: <i>"Đồng bào nghe tôi nói có rõ không?"</i> — giản dị và gần gũi đến xúc động.</p><br>
      <p><b>Di chúc thiêng liêng:</b> Người để lại Di chúc với lời căn dặn: <i>"Điều mong muốn cuối cùng của tôi là: Toàn Đảng, toàn dân ta đoàn kết phấn đấu, xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh..."</i></p><br>
      <p><b>Vinh danh quốc tế:</b> UNESCO vinh danh là Danh nhân văn hóa thế giới năm 1990. Tên Người được đặt cho hàng trăm con đường, trường học khắp thế giới.</p>
    `
  },
  {
    icon: "🎯",
    name: "Võ Nguyên Giáp",
    era: "1911 – 2013",
    desc: "Đại tướng 5 sao huyền thoại — từ thầy giáo tự học thành tổng tư lệnh bách chiến bách thắng, kiến trúc sư của Điện Biên Phủ và Đại thắng mùa Xuân.",
    detail: `
      <p><b>Từ thầy giáo đến Đại tướng:</b> Xuất thân là thầy giáo dạy lịch sử ở Hà Nội, hoàn toàn tự học binh pháp qua sách vở. Được Chủ tịch Hồ Chí Minh tin tưởng giao phụ trách quân sự từ năm 1944.</p><br>
      <p><b>Thiên tài chiến lược:</b> Quyết định thay đổi phương châm tác chiến ở Điện Biên Phủ được đánh giá là một trong những quyết định quân sự thiên tài nhất lịch sử. Ông tự nhận: <i>"Quyết định khó khăn nhất trong cuộc đời tôi."</i></p><br>
      <p><b>Hai chiến thắng lịch sử:</b> Chỉ huy Chiến thắng Điện Biên Phủ (1954) đánh bại Pháp và Chiến dịch Hồ Chí Minh (1975) đánh bại Mỹ — vị tướng duy nhất trong lịch sử thắng 2 siêu cường quân sự.</p><br>
      <p><b>Báo chí quốc tế đánh giá:</b> Được mệnh danh là <i>"Napoleon của châu Á"</i>, <i>"Người anh cả của Quân đội nhân dân Việt Nam"</i>. Ông mất năm 2013 thọ 102 tuổi, an táng tại Vũng Chùa — Đảo Yến, Quảng Bình.</p>
    `
  },
  {
    icon: "🌺",
    name: "Hai Bà Trưng",
    era: "Thế kỷ I SCN",
    desc: "Hai nữ vương anh hùng đầu tiên trong lịch sử Việt Nam — phất cờ khởi nghĩa giải phóng 65 thành trì, biểu tượng bất diệt của tinh thần quật khởi.",
    detail: `
      <p><b>Xuất thân:</b> <b>Trưng Trắc</b> và <b>Trưng Nhị</b> sinh tại vùng Mê Linh (Vĩnh Phúc), con gái Lạc tướng Mê Linh, thuộc dòng dõi Hùng Vương. Từ nhỏ đã được học võ nghệ, có chí khí phi thường.</p><br>
      <p><b>Nổi dậy và chiến thắng:</b> Năm 40 SCN, sau khi chồng Thi Sách bị Thái thú Tô Định giết hại, Trưng Trắc dấy binh. Chỉ trong thời gian ngắn, nghĩa quân giải phóng 65 thành trì. Trưng Trắc lên ngôi Nữ vương, đóng đô ở Mê Linh.</p><br>
      <p><b>Hy sinh anh dũng:</b> Năm 43 SCN, quân Mã Viện sang tái chiếm. Sau nhiều trận chiến ác liệt, Hai Bà Trưng tuẫn tiết tại dòng sông Hát — chọn cái chết anh dũng thay vì bị bắt làm nô lệ.</p><br>
      <p><b>Thờ phụng và di sản:</b> Đền Hai Bà Trưng (Hà Nội và Mê Linh) là di tích lịch sử cấp quốc gia. Hai bà là biểu tượng cho tinh thần <i>"Giặc đến nhà đàn bà cũng đánh"</i> — câu nói đã đi vào lòng dân tộc.</p>
    `
  },
  {
    icon: "🏯",
    name: "Lý Thường Kiệt",
    era: "1019 – 1105",
    desc: "Đại thần nhà Lý, tác giả bài thơ thần 'Nam quốc sơn hà' — Tuyên ngôn Độc lập đầu tiên, thiên tài quân sự phá tan 30 vạn quân Tống xâm lược.",
    detail: `
      <p><b>Xuất thân và sự nghiệp:</b> <b>Lý Thường Kiệt</b> (tên thật Ngô Tuấn) là Thái úy dưới triều ba đời vua Lý, người giữ trọng trách bảo vệ bờ cõi Đại Việt trong giai đoạn thịnh trị nhất của nhà Lý.</p><br>
      <p><b>Chiến lược 'tiến công để tự vệ':</b> Năm 1075, ông chủ trương đánh trước vào căn cứ của quân Tống tại Ung Châu — tiêu diệt hậu cần, phá tan kế hoạch xâm lược, một chiến lược phòng thủ chủ động táo bạo.</p><br>
      <p><b>Bài thơ thần bất hủ:</b> Đêm trên sông Như Nguyệt (1077), ông cho đọc bài thơ:<br>
      <i style="margin-left:1rem; display:block; border-left:3px solid #D4AF37; padding-left:1rem; line-height:2; margin-top:0.5rem;">"Nam quốc sơn hà Nam đế cư..."</i><br>
      được coi là <b>Bản Tuyên ngôn Độc lập đầu tiên</b> của dân tộc Việt Nam.</p><br>
      <p><b>Tài ngoại giao:</b> Sau khi thắng trận, ông chủ động cầu hòa với nhà Tống, lấy lại 6 châu bị chiếm trước đó bằng con đường ngoại giao — thể hiện sự khôn khéo toàn tài của bậc đại thần.</p>
    `
  }
];


// ═══════════════════════════════════════════════════════════════════
//  4. DANH NGÔN LỊCH SỬ BẤT HỦ (QUOTES DATA) — 5 câu nói
// ═══════════════════════════════════════════════════════════════════
const quotesData = [
  {
    text: '"Nam quốc sơn hà Nam đế cư, Tuyệt nhiên định phận tại thiên thư. Như hà nghịch lỗ lai xâm phạm, Nhữ đẳng hành khan thủ bại hư."',
    author: '— Thái úy Lý Thường Kiệt, Tuyên ngôn Độc lập đầu tiên của dân tộc Việt Nam (1077)'
  },
  {
    text: '"Ta thường tới bữa quên ăn, nửa đêm vỗ gối, ruột đau như cắt, nước mắt đầm đìa; chỉ căm tức chưa xả thịt lột da, nuốt gan uống máu quân thù."',
    author: '— Hưng Đạo Đại Vương Trần Quốc Tuấn, Hịch Tướng Sĩ (1285)'
  },
  {
    text: '"Việc nhân nghĩa cốt ở yên dân, Quân điếu phạt trước lo trừ bạo. Như nước Đại Việt ta từ trước, Vốn xưng nền văn hiến đã lâu. Núi sông bờ cõi đã chia, Phong tục Bắc Nam cũng khác."',
    author: '— Danh nhân Nguyễn Trãi, Bình Ngô Đại Cáo — Tuyên ngôn Độc lập thứ hai (1428)'
  },
  {
    text: '"Đánh cho để dài tóc, Đánh cho để đen răng, Đánh cho nó chích luân bất phản, Đánh cho nó phiến giáp bất hoàn, Đánh cho sử tri Nam quốc anh hùng chi hữu chủ!"',
    author: '— Hoàng đế Quang Trung Nguyễn Huệ, Lời dụ tướng sĩ trước trận Đống Đa (1789)'
  },
  {
    text: '"Không có gì quý hơn độc lập, tự do!"',
    author: '— Chủ tịch Hồ Chí Minh, Lời kêu gọi toàn quốc kháng chiến chống Mỹ cứu nước'
  }
];


// ═══════════════════════════════════════════════════════════════════
//  5. KHỞI TẠO & ĐIỀU PHỐI TOÀN BỘ HỆ THỐNG
// ═══════════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  renderTimeline(historyData);
  renderFigures();
  setupModalHandlers();
  setupFilterAndSearch();
  setupScrollReveal();
  setupNavbar();
  setupReadingProgress();
  setupKeyboardNavigation();
  animateStatsOnScroll();
  injectProgressBar();
});


// ═══════════════════════════════════════════════════════════════════
//  6. RENDER DÒNG THỜI GIAN LỊCH SỬ (TIMELINE RENDERER)
// ═══════════════════════════════════════════════════════════════════
function renderTimeline(data) {
  const tlBox = document.getElementById('timeline-box');
  tlBox.innerHTML = '';

  if (data.length === 0) {
    tlBox.innerHTML = `
      <div style="padding:3rem 2rem; text-align:center; color:var(--gold-royal); font-style:italic; opacity:0.7;">
        <div style="font-size:2.5rem; margin-bottom:1rem;">🔍</div>
        <p>Không tìm thấy sự kiện lịch sử phù hợp với từ khóa này.</p>
        <p style="font-size:0.85rem; margin-top:0.5rem; opacity:0.6;">Hãy thử tìm kiếm với từ khóa khác...</p>
      </div>`;
    return;
  }

  const tagMap = {
    dynasty:     { cls: 'tag-dynasty',     label: 'Triều Đại'   },
    war:         { cls: 'tag-war',          label: 'Kháng Chiến' },
    independence:{ cls: 'tag-independence', label: 'Độc Lập'     },
    culture:     { cls: 'tag-culture',      label: 'Văn Hóa'    }
  };

  data.forEach((item, idx) => {
    const tag = tagMap[item.type] || { cls: 'tag-dynasty', label: 'Lịch Sử' };
    tlBox.insertAdjacentHTML('beforeend', `
      <div class="timeline-item" data-type="${item.type}" data-index="${idx}" tabindex="0"
           aria-label="Sự kiện: ${item.title}" role="button">
        <div class="tl-dot"></div>
        <div class="tl-content" onclick="openHistoryModal('${escapeAttr(item.title)}')">
          <div class="tl-year">${item.year}</div>
          <h4 class="tl-title">${item.title}</h4>
          <p class="tl-desc">${item.desc}</p>
          <div class="tl-footer">
            <span class="tl-tag ${tag.cls}">${tag.label}</span>
            <span class="tl-read-more">Xem chi tiết →</span>
          </div>
        </div>
      </div>`);
  });

  // Khởi lại scroll reveal sau khi render
  setupScrollReveal();
}

// Escape ký tự đặc biệt cho thuộc tính HTML
function escapeAttr(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}


// ═══════════════════════════════════════════════════════════════════
//  7. RENDER DANH NHÂN ANH HÙNG (FIGURES RENDERER)
// ═══════════════════════════════════════════════════════════════════
function renderFigures() {
  const figuresBox = document.getElementById('figures-box');
  if (!figuresBox) return;
  figuresBox.innerHTML = '';

  figuresData.forEach((fig, idx) => {
    figuresBox.insertAdjacentHTML('beforeend', `
      <div class="figure-card" onclick="openFigureModal(${idx})"
           tabindex="0" role="button" aria-label="Danh nhân: ${fig.name}">
        <span class="figure-icon">${fig.icon}</span>
        <h4 class="figure-name">${fig.name}</h4>
        <div class="figure-era">${fig.era}</div>
        <p class="figure-desc">${fig.desc}</p>
        <span class="figure-cta">Xem tiểu sử →</span>
      </div>`);
  });
}


// ═══════════════════════════════════════════════════════════════════
//  8. ĐIỀU KHIỂN MODAL LỊCH SỬ (HISTORY MODAL)
// ═══════════════════════════════════════════════════════════════════
const modal          = document.getElementById('detailModal');
const modalTitle     = document.getElementById('modal-title');
const modalBody      = document.getElementById('modal-body-content');
const modalBadge     = document.getElementById('modal-badge');
const closeModalBtn  = document.getElementById('closeModalBtn');

function openHistoryModal(title) {
  const item = historyData.find(i => i.title === title);
  if (!item) return;

  modalTitle.textContent  = item.title;
  modalBody.innerHTML     = item.content;
  modalBadge.textContent  = item.badge || 'LỊCH SỬ';

  // Màu sắc badge theo loại
  const badgeColors = {
    dynasty:      '#8B4513',
    war:          '#8B0000',
    independence: '#1B5E20',
    culture:      '#4A148C'
  };
  modalBadge.style.background = badgeColors[item.type] || '#555';

  openModal();
}


// ═══════════════════════════════════════════════════════════════════
//  9. ĐIỀU KHIỂN MODAL DANH NHÂN (FIGURE MODAL)
// ═══════════════════════════════════════════════════════════════════
function openFigureModal(idx) {
  const fig = figuresData[idx];
  if (!fig) return;

  modalTitle.textContent = `${fig.icon}  ${fig.name}`;
  modalBody.innerHTML    = fig.detail;
  modalBadge.textContent = fig.era;
  modalBadge.style.background = '#5D3A1A';

  openModal();
}

// Hàm dùng chung mở/đóng modal
function openModal() {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  // Focus vào nút đóng để hỗ trợ keyboard
  setTimeout(() => closeModalBtn.focus(), 100);
}

function closeHistoryModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function setupModalHandlers() {
  closeModalBtn.addEventListener('click', closeHistoryModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeHistoryModal();
  });
}


// ═══════════════════════════════════════════════════════════════════
//  10. BỘ LỌC & TÌM KIẾM KẾT HỢP (FILTER + SEARCH)
// ═══════════════════════════════════════════════════════════════════

// Lưu trạng thái hiện tại
let currentFilter = 'all';
let currentKeyword = '';

function setupFilterAndSearch() {
  // --- Bộ lọc kỷ nguyên ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.getAttribute('data-filter');
      applyFilterAndSearch();
    });
  });

  // --- Tìm kiếm real-time với debounce ---
  const searchInput = document.getElementById('searchHistory');
  if (!searchInput) return;

  let debounceTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentKeyword = e.target.value.toLowerCase().trim();
      applyFilterAndSearch();
    }, 250);
  });

  // Xóa tìm kiếm khi nhấn Escape trong ô tìm kiếm
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchInput.value = '';
      currentKeyword = '';
      applyFilterAndSearch();
      searchInput.blur();
    }
  });
}

// Áp dụng cả bộ lọc và tìm kiếm cùng lúc
function applyFilterAndSearch() {
  let result = historyData;

  // Lọc theo loại
  if (currentFilter !== 'all') {
    result = result.filter(item => item.type === currentFilter);
  }

  // Lọc theo từ khóa
  if (currentKeyword) {
    result = result.filter(item =>
      item.title.toLowerCase().includes(currentKeyword) ||
      item.year.toLowerCase().includes(currentKeyword)  ||
      item.desc.toLowerCase().includes(currentKeyword)
    );
  }

  renderTimeline(result);
}


// ═══════════════════════════════════════════════════════════════════
//  11. SLIDER DANH NGÔN (QUOTE SLIDER) với hiệu ứng mượt mà
// ═══════════════════════════════════════════════════════════════════
function changeQuote(index) {
  const quoteEl  = document.getElementById('quote-text');
  const quoteBtns = document.querySelectorAll('.quote-btn');

  // Cập nhật trạng thái nút
  quoteBtns.forEach((btn, i) => btn.classList.toggle('active', i === index));

  // Hiệu ứng fade out → đổi nội dung → fade in
  quoteEl.style.opacity   = '0';
  quoteEl.style.transform = 'translateY(15px)';

  setTimeout(() => {
    const q = quotesData[index];
    quoteEl.innerHTML = `${q.text}<cite>${q.author}</cite>`;
    quoteEl.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    quoteEl.style.opacity    = '1';
    quoteEl.style.transform  = 'translateY(0)';
  }, 300);
}

// Tự động xoay danh ngôn mỗi 8 giây
let quoteAutoInterval = setInterval(() => {
  const activeBtnIdx = Array.from(document.querySelectorAll('.quote-btn'))
                            .findIndex(btn => btn.classList.contains('active'));
  const nextIdx = (activeBtnIdx + 1) % quotesData.length;
  changeQuote(nextIdx);
}, 8000);

// Tạm dừng xoay khi người dùng bấm nút
document.querySelectorAll('.quote-btn').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    clearInterval(quoteAutoInterval);
    changeQuote(i);
    // Tiếp tục xoay sau 15 giây
    quoteAutoInterval = setInterval(() => {
      const activeIdx = Array.from(document.querySelectorAll('.quote-btn'))
                             .findIndex(b => b.classList.contains('active'));
      changeQuote((activeIdx + 1) % quotesData.length);
    }, 8000);
  });
});


// ═══════════════════════════════════════════════════════════════════
//  12. HIỆU ỨNG XUẤT HIỆN KHI CUỘN TRANG (SCROLL REVEAL)
// ═══════════════════════════════════════════════════════════════════
function setupScrollReveal() {
  const items = document.querySelectorAll('.timeline-item:not(.visible)');
  if (!items.length) return;

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // Chỉ kích hoạt 1 lần
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  items.forEach((item, i) => {
    // Delay lũy tiến tạo hiệu ứng xuất hiện từng bước
    item.style.transitionDelay = `${Math.min(i * 80, 400)}ms`;
    revealObserver.observe(item);
  });
}

// Hiệu ứng reveal cho các section khác (figures, quote)
const genericRevealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.figure-card, .section-heading').forEach(el => {
  genericRevealObserver.observe(el);
});


// ═══════════════════════════════════════════════════════════════════
//  13. THANH ĐIỀU HƯỚNG THÔNG MINH (SMART NAVBAR)
// ═══════════════════════════════════════════════════════════════════
function setupNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let lastScrollY = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // Thêm class 'scrolled' khi đã cuộn xuống
        navbar.classList.toggle('scrolled', currentScrollY > 80);

        // Ẩn/hiện navbar khi cuộn xuống/lên
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          navbar.classList.add('hidden');
        } else {
          navbar.classList.remove('hidden');
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    }
  });

  // Active link theo section đang xem
  const sections   = document.querySelectorAll('section[id]');
  const navLinks   = document.querySelectorAll('.nav-link-item');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(section => sectionObserver.observe(section));
}


// ═══════════════════════════════════════════════════════════════════
//  14. THANH TIẾN TRÌNH ĐỌC (READING PROGRESS BAR)
// ═══════════════════════════════════════════════════════════════════
function injectProgressBar() {
  const bar = document.createElement('div');
  bar.id = 'reading-progress';
  bar.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    height: 3px;
    width: 0%;
    background: linear-gradient(to right, #C0392B, #D4AF37, #C0392B);
    z-index: 9999;
    transition: width 0.1s linear;
    box-shadow: 0 0 8px rgba(212,175,55,0.6);
  `;
  document.body.prepend(bar);
}

function setupReadingProgress() {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop    = window.scrollY;
    const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${Math.min(scrollPercent, 100)}%`;
  }, { passive: true });
}


// ═══════════════════════════════════════════════════════════════════
//  15. BỘ ĐẾM SỐ LIỆU THỐNG KÊ (ANIMATED STATS COUNTER)
// ═══════════════════════════════════════════════════════════════════
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target.toLocaleString('vi-VN') + (el.dataset.suffix || '');
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start).toLocaleString('vi-VN') + (el.dataset.suffix || '');
    }
  }, 16);
}

function animateStatsOnScroll() {
  const statEls = document.querySelectorAll('[data-count]');
  if (!statEls.length) return;

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        const target = parseInt(entry.target.dataset.count, 10);
        animateCounter(entry.target, target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statEls.forEach(el => countObserver.observe(el));
}


// ═══════════════════════════════════════════════════════════════════
//  16. ĐIỀU HƯỚNG BÀN PHÍM (KEYBOARD NAVIGATION)
// ═══════════════════════════════════════════════════════════════════
function setupKeyboardNavigation() {
  // Đóng modal bằng phím Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeHistoryModal();
    }
  });

  // Mở modal bằng Enter/Space khi focus vào timeline-item
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('timeline-item')) {
      e.preventDefault();
      const titleEl = e.target.querySelector('.tl-title');
      if (titleEl) openHistoryModal(titleEl.textContent);
    }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('figure-card')) {
      e.preventDefault();
      const idx = Array.from(document.querySelectorAll('.figure-card')).indexOf(e.target);
      if (idx >= 0) openFigureModal(idx);
    }
  });

  // Điều hướng danh ngôn bằng phím mũi tên
  document.addEventListener('keydown', (e) => {
    const quoteSection = document.getElementById('quote-section');
    if (!quoteSection || !quoteSection.contains(document.activeElement)) return;

    const activeBtnIdx = Array.from(document.querySelectorAll('.quote-btn'))
                              .findIndex(btn => btn.classList.contains('active'));
    if (e.key === 'ArrowRight') changeQuote((activeBtnIdx + 1) % quotesData.length);
    if (e.key === 'ArrowLeft')  changeQuote((activeBtnIdx - 1 + quotesData.length) % quotesData.length);
  });
}


// ═══════════════════════════════════════════════════════════════════
//  17. TIỆN ÍCH BỔ SUNG (UTILITIES)
// ═══════════════════════════════════════════════════════════════════

// Smooth scroll cho tất cả anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Hiệu ứng hover âm thanh (tạo cảm giác cổ điển)
document.querySelectorAll('.filter-btn, .quote-btn').forEach(btn => {
  btn.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-2px)';
  });
  btn.addEventListener('mouseleave', function () {
    this.style.transform = '';
  });
});

// Tooltip nhỏ khi hover vào tl-tag
document.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('tl-tag')) {
    const tooltips = {
      'Triều Đại': 'Các sự kiện liên quan đến lập quốc, dời đô, hưng thịnh triều đại',
      'Kháng Chiến': 'Những cuộc chiến tranh bảo vệ Tổ quốc hào hùng',
      'Độc Lập': 'Các mốc lịch sử giành và khẳng định độc lập dân tộc',
      'Văn Hóa': 'Các sự kiện văn hóa, giáo dục, văn học nghệ thuật'
    };
    e.target.title = tooltips[e.target.textContent] || '';
  }
});

// Nút cuộn lên đầu trang (Back to Top)
(function createBackToTop() {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.innerHTML = '▲';
  btn.setAttribute('aria-label', 'Cuộn lên đầu trang');
  btn.style.cssText = `
    position: fixed; bottom: 2rem; right: 2rem;
    width: 44px; height: 44px;
    background: rgba(26,10,0,0.9);
    color: #D4AF37;
    border: 1px solid rgba(212,175,55,0.4);
    border-radius: 50%;
    font-size: 1.1rem;
    cursor: pointer;
    opacity: 0; visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s, transform 0.2s;
    z-index: 500;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 16px rgba(0,0,0,0.4);
  `;
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    const show = window.scrollY > 600;
    btn.style.opacity    = show ? '1' : '0';
    btn.style.visibility = show ? 'visible' : 'hidden';
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  btn.addEventListener('mouseenter', () => { btn.style.transform = 'translateY(-3px)'; });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
})();


// ═══════════════════════════════════════════════════════════════════
//  18. LOG KHỞI TẠO THÀNH CÔNG
// ═══════════════════════════════════════════════════════════════════
console.log(
  '%c📜 Bách Khoa Toàn Thư Lịch Sử Việt Nam\n' +
  '%c✅ Hệ thống khởi tạo thành công!\n' +
  `%c• ${historyData.length} sự kiện lịch sử\n` +
  `• ${figuresData.length} danh nhân anh hùng\n` +
  `• ${quotesData.length} danh ngôn bất hủ\n` +
  '• Bộ lọc, tìm kiếm, modal, keyboard nav đã sẵn sàng.',
  'color:#D4AF37; font-size:1.1em; font-weight:bold;',
  'color:#81C784; font-weight:bold;',
  'color:#B0BEC5; font-size:0.9em;'
);
// ─── KHỐI ĐIỀU KHIỂN ĐỘC LẬP: CHUYỂN ĐỔI BA ÁNG HÙNG VĂN ───
(function () {
  const danhSachHungVan = [
    {
      title: "NAM QUỐC SƠN HÀ",
      meta: "<b>Tác giả:</b> Thái úy Lý Thường Kiệt | <b>Hoàn cảnh:</b> Kháng chiến chống Tống (1077)",
      html: `
        <div class="hungvan-text han-nom">
          南 國 山 河 南 帝 居<br>
          截 然 定 分 在 天 書<br>
          如 何 逆 虜 來 侵 犯<br>
          汝 等 行 看 取 敗 虛
        </div>
        <div class="hungvan-text phonetic">
          <strong>Phiên âm chữ Hán:</strong><br>
          Nam quốc sơn hà Nam đế cư,<br>
          Tuyệt nhiên định phận tại thiên thư.<br>
          Như hà nghịch lỗ lai xâm phạm,<br>
          Nhữ đẳng hành khan thủ bại hư.
        </div>
        <div class="hungvan-text translation">
          <strong>Dịch thơ:</strong><br>
          Sông núi nước Nam vua Nam ở,<br>
          Vành vạnh sách trời chia xứ sở.<br>
          Giặc dữ cớ sao phạm cõi này,<br>
          Chúng mày nhất định phải tan vỡ!
        </div>
      `
    },
    {
      title: "BÌNH NGÔ ĐẠI CÁO",
      meta: "<b>Tác giả:</b> Danh nhân Nguyễn Trãi | <b>Hoàn cảnh:</b> Đại thắng quân Minh giải phóng giang sơn (1428)",
      html: `
        <div class="hungvan-text translation" style="text-align: justify;">
          <strong>Khẳng định nền độc lập:</strong><br>
          "Như nước Đại Việt ta từ trước,<br>
          Vốn xưng nền văn hiến đã lâu.<br>
          Núi sông bờ cõi đã chia,<br>
          Phong tục Bắc Nam cũng khác.<br>
          Từ Triệu, Đinh, Lý, Trần bao đời xây nền độc lập,<br>
          Cùng Hán, Đường, Tống, Nguyên mỗi bên xưng đế một phương.<br>
          Tuy mạnh yếu từng lúc khác nhau,<br>
          Song hào kiệt đời nào cũng có..."<br><br>
          <strong>Lời ca khải hoàn trường tồn:</strong><br>
          "Xã tắc từ đây vững bền,<br>
          Giang sơn từ đây đổi mới.<br>
          Càn khôn bĩ rồi lại thái,<br>
          Nhật nguyệt hối rồi lại minh.<br>
          Ngàn năm vết nhục nhã sạch làu,<br>
          Muôn thuở nền thái bình vững chắc!"
        </div>
      `
    },
    {
      title: "TUYÊN NGÔN ĐỘC LẬP",
      meta: "<b>Tác giả:</b> Chủ tịch Hồ Chí Minh | <b>Hoàn cảnh:</b> Đọc tại Quảng trường Ba Đình lịch sử (02/09/1945)",
      html: `
        <div class="hungvan-text translation" style="text-align: justify;">
          <strong>Chân lý bất hủ của nhân loại:</strong><br>
          "Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền không ai có thể xâm phạm được; trong những quyền ấy, có quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc..."<br><br>
          <strong>Lời tuyên cáo đanh thép:</strong><br>
          "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập. Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy."
        </div>
      `
    }
  ];

  // Gắn trực tiếp vào đối tượng toàn cục window để triệt tiêu hoàn toàn lỗi không nhận hàm
  window.switchDeclaration = function (index) {
    const contentBox = document.getElementById('hungvan-content');
    const allButtons = document.querySelectorAll('.hungvan-tab-btn');
    if (!contentBox || allButtons.length === 0) return;

    allButtons.forEach((btn, i) => {
      if (i === index) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    contentBox.style.opacity = '0';
    contentBox.style.transform = 'translateY(8px)';
    contentBox.style.transition = 'all 0.25s ease';

    setTimeout(() => {
      const selectedData = danhSachHungVan[index];
      contentBox.innerHTML = `
        <div class="hungvan-package animate-fade">
          <h3 class="hungvan-content-title">${selectedData.title}</h3>
          <p class="hungvan-meta">${selectedData.meta}</p>
          ${selectedData.html}
        </div>
      `;
      contentBox.style.opacity = '1';
      contentBox.style.transform = 'translateY(0)';
    }, 250);
  };
})();