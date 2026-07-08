# FinSight - Hồ Sơ Mô Tả Sản Phẩm Cho Cuộc Thi Startup

## 1. Tóm tắt ngắn gọn

FinSight là một nền tảng phân tích sức khỏe tài chính cá nhân ứng dụng AI, giúp người dùng hiểu tình trạng tài chính hiện tại, dự báo rủi ro dòng tiền trong tương lai và nhận kế hoạch hành động phù hợp với thu nhập, chi tiêu, nợ và mục tiêu cá nhân.

Thay vì chỉ ghi lại người dùng đã tiêu gì trong quá khứ, FinSight hướng đến việc trả lời ba câu hỏi quan trọng hơn:

1. Tình hình tài chính của tôi hiện đang khỏe hay rủi ro?
2. Trong vài tuần hoặc vài tháng tới, tôi có nguy cơ thiếu tiền, tăng nợ hoặc lệch mục tiêu không?
3. Tôi cần làm gì ngay bây giờ để cải thiện tình hình?

Ở trạng thái hiện tại, sản phẩm là một MVP/prototype frontend gồm landing page và luồng demo nhập dữ liệu tài chính. Demo hiện mô phỏng Financial Health Score, monthly cash flow và một số khuyến nghị cơ bản bằng logic phía client. Tầm nhìn sản phẩm là phát triển thành một hệ thống AI financial intelligence đầy đủ, có backend, tài khoản người dùng, xử lý tài liệu tài chính, dự báo dài hạn, bảo mật dữ liệu và cá nhân hóa sâu hơn.

## 2. Vấn đề thị trường

Nhiều người trẻ, freelancer và người có thu nhập trung bình không thiếu công cụ ghi chép chi tiêu, nhưng vẫn thiếu một hệ thống giúp họ hiểu ý nghĩa của dữ liệu tài chính.

Các vấn đề thường gặp:

- Người dùng biết mình đã chi bao nhiêu, nhưng không biết tình trạng tài chính đang tốt hay xấu.
- Các ứng dụng budgeting truyền thống thường nhìn về quá khứ, chưa cảnh báo sớm rủi ro tương lai.
- Lời khuyên tài chính trên mạng thường quá chung chung, không dựa trên bức tranh tài chính thật của từng người.
- Nhiều người ngại kết nối tài khoản ngân hàng vì lo lộ thông tin đăng nhập hoặc dữ liệu nhạy cảm.
- Freelancer hoặc người có thu nhập biến động khó dùng các công thức budgeting cố định.
- Người dùng muốn đạt mục tiêu như quỹ khẩn cấp, trả nợ, mua nhà, mua xe, du lịch hoặc đám cưới, nhưng không biết timeline có thực tế hay không.

FinSight được thiết kế để giải quyết khoảng trống giữa "theo dõi chi tiêu" và "ra quyết định tài chính thông minh".

## 3. Khách hàng mục tiêu

FinSight tập trung vào ba nhóm người dùng chính:

### Người sống gần mức paycheck-to-paycheck

Đây là nhóm thường hết tiền trước kỳ lương tiếp theo. Họ cần biết tiền đang rò rỉ ở đâu, tháng nào có nguy cơ thiếu hụt và cần cắt giảm khoản nào trước.

Giá trị FinSight mang lại:

- Phân tích thu nhập và chi tiêu theo tháng.
- Nhận diện dòng tiền âm.
- Đưa ra cảnh báo nếu chi tiêu vượt thu nhập.
- Gợi ý hành động cụ thể như giảm discretionary spending hoặc tự động hóa tiết kiệm.

### Freelancer hoặc người có nhiều nguồn thu nhập

Nhóm này có thu nhập không đều, khiến budgeting truyền thống kém hiệu quả. Họ cần một công cụ dự báo theo nhiều kịch bản và giúp xây dựng vùng đệm tài chính.

Giá trị FinSight mang lại:

- Cho phép nhập nhiều nguồn thu nhập: lương chính, freelance, thu nhập khác.
- Hướng tới mô hình dự báo 6-12 tháng trong phiên bản phát triển tiếp theo.
- Gợi ý buffer tài chính phù hợp với biến động thu nhập.

### Người đang theo đuổi mục tiêu tài chính

Nhóm này muốn tiết kiệm cho quỹ khẩn cấp, mua nhà, mua xe, du lịch, đám cưới hoặc trả nợ. Vấn đề chính không phải chỉ là "muốn tiết kiệm", mà là không biết mỗi tháng cần làm gì và kế hoạch có khả thi không.

Giá trị FinSight mang lại:

- Cho phép nhập loại mục tiêu, số tiền mục tiêu và timeline.
- Hướng tới roadmap tiết kiệm cá nhân hóa.
- Giúp người dùng điều chỉnh kế hoạch khi thu nhập hoặc chi tiêu thay đổi.

## 4. Giải pháp sản phẩm

FinSight hoạt động như một lớp "financial intelligence" đặt trên dữ liệu tài chính cá nhân. Sản phẩm không định vị mình là ngân hàng, ví điện tử, nền tảng cho vay hoặc nhà môi giới đầu tư. FinSight là công cụ phân tích, dự báo và coaching tài chính cá nhân.

Các năng lực cốt lõi:

- Financial Health Score: một điểm số tổng quan thể hiện sức khỏe tài chính.
- Cash Flow Analysis: phân tích thu nhập, chi tiêu, nợ và phần tiền còn lại mỗi tháng.
- Predictive Cash-Flow Forecast: định hướng dự báo dòng tiền 6-12 tháng.
- Risk Alerts: cảnh báo sớm rủi ro như thiếu hụt dòng tiền, tỷ lệ nợ tăng hoặc thiếu quỹ khẩn cấp.
- Personalized Action Plan: đề xuất hành động cụ thể thay vì lời khuyên chung chung.
- Goal Planning: lập kế hoạch theo mục tiêu tài chính cá nhân.
- Privacy-first Input: cho phép nhập thủ công, định hướng hỗ trợ PDF statement mà không yêu cầu kết nối tài khoản ngân hàng.

## 5. Trạng thái sản phẩm hiện tại

Sản phẩm hiện tại trong repo là một MVP/prototype được xây dựng bằng Next.js, React, TypeScript, Tailwind CSS và motion animation.

Những phần đã có:

- Landing page giới thiệu FinSight.
- Các section marketing: features, product showcase, how it works, benefits, personas, pricing, FAQ và final CTA.
- Trang demo tại `/demo`.
- Luồng nhập dữ liệu gồm 5 bước: profile, income, expenses, debts, goals.
- Màn hình kết quả demo gồm Financial Health Score, monthly cash flow và top recommendations.
- Static export hỗ trợ deploy lên GitHub Pages.

Những phần đang là mô phỏng hoặc định hướng:

- AI analysis hiện chưa phải mô hình AI/backend thật; demo dùng logic tính toán đơn giản ở frontend.
- PDF bank statement upload được nhắc trong nội dung sản phẩm, nhưng chưa có flow xử lý file hoàn chỉnh trong code hiện tại.
- Tài khoản người dùng, lưu trữ dữ liệu, mã hóa backend, xóa dữ liệu và subscription billing chưa được triển khai trong MVP.
- Pricing Free/Plus/Premium đang là định hướng mô hình kinh doanh, chưa phải hệ thống thanh toán đang hoạt động.
- Các claim như số lượng beta users, accuracy rate hoặc rating nên được xem là thông điệp minh họa/pitch cho giai đoạn trình bày, không phải số liệu đã được chứng minh trong repo hiện tại.

Cách trình bày phù hợp trước giám khảo: FinSight hiện là prototype có trải nghiệm sản phẩm rõ ràng, chứng minh được user journey và value proposition. Giai đoạn tiếp theo là biến prototype này thành product backend-driven có dữ liệu thật, AI thật và tiêu chuẩn bảo mật đầy đủ.

## 6. Luồng sử dụng sản phẩm

Người dùng có thể trải nghiệm FinSight qua một quy trình ngắn, dễ hiểu và ít ma sát.

### Bước 1: Truy cập landing page

Người dùng vào trang chính để hiểu FinSight làm gì, khác gì app budgeting thông thường và có phù hợp với mình không.

Thông điệp chính:

- Không phải ngân hàng.
- Không phải bên cho vay.
- Không yêu cầu kết nối tài khoản ngân hàng.
- Tập trung vào phân tích sức khỏe tài chính, dự báo rủi ro và hành động cụ thể.

### Bước 2: Mở demo

Người dùng chọn "Try Demo" để đi vào trang `/demo`. Đây là nơi MVP chứng minh quy trình sản phẩm.

### Bước 3: Nhập thông tin cá nhân cơ bản

Input hiện tại:

- Tuổi.
- Thành phố, tùy chọn.
- Quốc gia.

Mục đích:

- Cá nhân hóa benchmark tài chính trong phiên bản tương lai.
- Cho phép hệ thống hiểu bối cảnh sống và chi phí sinh hoạt.

### Bước 4: Nhập thu nhập hàng tháng

Input hiện tại:

- Lương hoặc công việc chính.
- Thu nhập freelance/side hustle.
- Thu nhập khác như đầu tư, cho thuê hoặc nguồn khác.

Đánh giá độ nặng input:

- Input không quá nặng vì chỉ yêu cầu con số trung bình hàng tháng.
- Không yêu cầu người dùng tải sao kê ngay từ đầu.
- Không yêu cầu đăng nhập ngân hàng.
- Phù hợp để giảm friction trong demo và onboarding đầu tiên.

### Bước 5: Nhập chi tiêu hàng tháng

Input hiện tại:

- Rent hoặc mortgage.
- Utilities.
- Subscriptions.
- Groceries & food.
- Transportation.
- Shopping & lifestyle.
- Entertainment & dining out.
- Healthcare & wellness.
- Education & childcare.
- Other expenses.

Đánh giá độ nặng input:

- Đây là bước dài nhất, nhưng vẫn hợp lý vì tài chính cá nhân cần đủ dữ liệu để cho kết quả có ý nghĩa.
- Các nhóm chi tiêu được chia rõ, dễ hiểu.
- Người dùng có thể bỏ trống mục không áp dụng.
- Trong phiên bản tiếp theo, có thể giảm ma sát bằng PDF upload, CSV import, template mẫu hoặc auto-categorization.

### Bước 6: Nhập nợ và tín dụng

Input hiện tại:

- Loans: loại khoản vay, tổng dư nợ, khoản trả hàng tháng.
- Credit cards: tên thẻ, dư nợ hiện tại, hạn mức tín dụng.

Mục đích:

- Tính nghĩa vụ trả nợ hàng tháng.
- Nhận diện áp lực debt-to-income.
- Làm nền tảng cho debt optimization trong phiên bản sau.

### Bước 7: Nhập mục tiêu tài chính

Input hiện tại:

- Loại mục tiêu: quỹ khẩn cấp, mua nhà, mua xe, du lịch, đám cưới, trả nợ hoặc mục tiêu khác.
- Số tiền mục tiêu.
- Timeline theo tháng.

Mục đích:

- Biến kết quả phân tích thành kế hoạch hành động.
- Giúp người dùng biết mục tiêu có khả thi không với dòng tiền hiện tại.

### Bước 8: Nhận kết quả

Kết quả demo hiện tại:

- Financial Health Score.
- Tổng thu nhập hàng tháng.
- Tổng chi tiêu và khoản trả nợ hàng tháng.
- Net leftover.
- Cảnh báo nếu cash flow âm.
- Gợi ý hành động ưu tiên.

Định hướng kết quả trong sản phẩm đầy đủ:

- Dự báo dòng tiền 6-12 tháng.
- Risk alerts theo từng thời điểm.
- Action plan theo tuần/tháng.
- Kịch bản "what-if" nếu giảm chi tiêu, tăng thu nhập hoặc trả nợ nhanh hơn.
- Báo cáo định kỳ.

## 7. Đầu vào dữ liệu có nặng không?

Từ góc độ nhà đầu tư, input của FinSight ở mức chấp nhận được cho một sản phẩm tài chính cá nhân, vì sản phẩm đang giải quyết vấn đề có độ nhạy và độ phức tạp cao. Tuy nhiên, để tăng conversion, input cần được thiết kế theo nguyên tắc "progressive disclosure".

Điểm mạnh hiện tại:

- Không yêu cầu tạo tài khoản trước khi demo.
- Không yêu cầu kết nối ngân hàng.
- Chia input thành nhiều bước ngắn.
- Progress bar giúp người dùng biết mình đang ở đâu.
- Có thể bỏ trống các mục không áp dụng.
- Dữ liệu cần nhập là dữ liệu người dùng thường tự ước lượng được.

Điểm cần cải thiện khi phát triển tiếp:

- Thêm preset hoặc example cho từng loại người dùng.
- Cho phép nhập nhanh theo mức ước lượng nếu người dùng không biết số chính xác.
- Có chế độ "quick analysis" chỉ cần thu nhập, tổng chi tiêu và nợ.
- Có chế độ "full analysis" cho người dùng muốn kết quả chính xác hơn.
- Hỗ trợ upload PDF/CSV để giảm nhập thủ công.
- Lưu session tạm thời để người dùng không mất dữ liệu nếu thoát giữa chừng.

Kết luận: Input hiện tại đủ tốt cho demo và investor validation. Để scale thành consumer product, cần tối ưu thêm onboarding và giảm cognitive load ở bước chi tiêu.

## 8. Kết quả đầu ra và giá trị người dùng nhận được

FinSight không chỉ hiển thị biểu đồ. Sản phẩm hướng tới việc biến dữ liệu thành quyết định.

### Financial Health Score

Điểm số giúp người dùng có một chỉ báo đơn giản để biết mình đang ở đâu. Trong demo hiện tại, score được tính chủ yếu dựa trên savings rate và cash flow. Trong sản phẩm thật, score nên mở rộng thành mô hình đa yếu tố gồm:

- Income stability.
- Spending discipline.
- Debt burden.
- Savings rate.
- Emergency buffer.
- Goal progress.
- Cash-flow volatility.

### Cash Flow View

Người dùng thấy rõ:

- Tổng thu nhập.
- Tổng chi tiêu và nghĩa vụ trả nợ.
- Số tiền còn lại hoặc thiếu hụt.

Đây là nền tảng cho mọi khuyến nghị tiếp theo.

### Risk Alerts

Nếu cash flow âm hoặc rủi ro tăng, FinSight cảnh báo sớm để người dùng không chỉ phát hiện vấn đề sau khi đã quá muộn.

Ví dụ:

- "Bạn đang chi nhiều hơn thu nhập."
- "Chi tiêu giải trí và shopping đang cao so với mức thu nhập."
- "Tỷ lệ trả nợ hàng tháng đang ảnh hưởng khả năng tiết kiệm."

### Action Plan

FinSight cần đưa ra hành động cụ thể, đo được và có thể làm ngay.

Ví dụ:

- Giảm discretionary spending trong tháng này.
- Tự động chuyển một phần cash flow dương sang tài khoản tiết kiệm.
- Ưu tiên trả khoản nợ có lãi suất cao.
- Xây dựng quỹ khẩn cấp 3 tháng trước khi mở rộng mục tiêu khác.

Đây là điểm khác biệt quan trọng so với app chỉ tracking.

## 9. Đánh giá thiết kế web từ góc độ nhà đầu tư

Tổng thể, thiết kế hiện tại phù hợp với một startup fintech/AI consumer product ở giai đoạn pitch. Website tạo được cảm giác hiện đại, có định vị rõ và truyền tải tốt giá trị sản phẩm.

### Điểm mạnh

- Visual identity nhất quán: dark theme, glassmorphism, màu xanh/violet/emerald tạo cảm giác công nghệ và tài chính.
- Hero section truyền tải thông điệp rõ: "Know Your Financial Future".
- Có dashboard mockup giúp giám khảo hiểu sản phẩm thay vì chỉ đọc mô tả.
- Navigation đầy đủ: features, product, how it works, pricing, FAQ.
- Có demo flow thật, giúp tăng độ tin cậy so với landing page thuần marketing.
- Copywriting tập trung vào outcome: financial health, cash-flow risk, action plan.
- FAQ xử lý sẵn nhiều câu hỏi nhạy cảm: có phải ngân hàng không, có cần kết nối bank không, dữ liệu có an toàn không.

### Điểm cần lưu ý

- Một số CTA trỏ đến `/app`, nhưng repo hiện chỉ có `/demo`; nếu trình diễn trực tiếp, nên đảm bảo link không dẫn đến trang chưa tồn tại hoặc đổi CTA về demo.
- Một số claim marketing như "10K+ Beta Users", "94% Accuracy Rate" và "4.9 rating" cần có bằng chứng nếu dùng trong cuộc thi. Nếu chưa có dữ liệu thật, nên nói đây là target hoặc placeholder trong prototype.
- Các nội dung như bank-grade encryption, TLS, AES-256 nên được trình bày là security architecture dự kiến nếu backend chưa triển khai.
- Website có phong cách rất bắt mắt, nhưng để phù hợp fintech lâu dài cần bổ sung các trang trust như Privacy Policy, Terms, Security và disclaimer tài chính.

### Kết luận thiết kế

Từ góc độ nhà đầu tư, thiết kế đã đủ mạnh để trình bày tầm nhìn và năng lực sản phẩm ở giai đoạn MVP. Điểm cần cải thiện không nằm ở tính thẩm mỹ, mà nằm ở bằng chứng triển khai: AI thật, dữ liệu thật, security thật, retention thật và conversion funnel thật.

## 10. Bảo mật và quyền riêng tư

Tài chính cá nhân là dữ liệu nhạy cảm, nên FinSight phải lấy privacy làm nguyên tắc thiết kế cốt lõi.

### Trạng thái hiện tại

Trong demo hiện tại, dữ liệu người dùng được nhập và xử lý trên frontend state. Không có backend lưu trữ dữ liệu trong repo hiện tại. Điều này phù hợp với thông điệp demo: dữ liệu không được gửi đi hoặc lưu trong hệ thống backend.

Tuy nhiên, vì chưa có backend, các tuyên bố như mã hóa dữ liệu at rest, TLS transit, xóa tài khoản hoặc quản trị dữ liệu cần được hiểu là yêu cầu thiết kế cho phiên bản production, chưa phải năng lực đã chứng minh trong code hiện tại.

### Nguyên tắc bảo mật cho phiên bản production

- Không yêu cầu thông tin đăng nhập ngân hàng.
- Không bán dữ liệu người dùng.
- Không dùng dữ liệu để ép bán khoản vay, thẻ tín dụng hoặc sản phẩm tài chính.
- Mã hóa dữ liệu khi truyền tải bằng HTTPS/TLS.
- Mã hóa dữ liệu nhạy cảm khi lưu trữ.
- Tách dữ liệu nhận dạng cá nhân khỏi dữ liệu phân tích khi có thể.
- Cho phép người dùng xóa dữ liệu.
- Có audit log cho các thao tác truy cập dữ liệu nhạy cảm.
- Áp dụng least privilege cho backend service và admin.
- Có chính sách rõ ràng về retention, deletion và model training.

### Disclaimer tài chính

FinSight nên ghi rõ rằng sản phẩm không phải cố vấn tài chính được cấp phép, không phải ngân hàng, không phải bên cho vay và không đưa ra lời khuyên đầu tư pháp lý bắt buộc. Sản phẩm cung cấp phân tích và gợi ý tham khảo để người dùng ra quyết định tốt hơn.

## 11. Mô hình kinh doanh

FinSight có thể đi theo mô hình freemium SaaS cho người dùng cá nhân.

### Free

Mục tiêu: giảm rào cản trải nghiệm và tạo funnel người dùng.

Tính năng phù hợp:

- Financial Health Score cơ bản.
- Cash-flow view ngắn hạn.
- Manual data entry.
- Một số khuyến nghị giới hạn.
- Một mục tiêu tài chính.

### Plus

Mục tiêu: chuyển đổi người dùng có nhu cầu nghiêm túc hơn.

Tính năng phù hợp:

- Dự báo 6 tháng.
- Risk alerts.
- PDF/CSV upload.
- Khuyến nghị không giới hạn.
- Goal roadmap.
- Báo cáo hàng tháng.

### Premium

Mục tiêu: phục vụ power users hoặc người có tài chính phức tạp hơn.

Tính năng phù hợp:

- Dự báo 12 tháng.
- Scenario planning.
- Multi-income modeling.
- Debt payoff optimizer.
- Weekly AI coaching.
- Ưu tiên hỗ trợ.

### Vì sao mô hình này hợp lý?

- Người dùng có thể thấy giá trị trước khi trả tiền.
- Tính năng trả phí gắn với kết quả có giá trị cao hơn: dự báo, cảnh báo, tự động hóa và coaching.
- Không phụ thuộc vào việc bán dữ liệu hoặc bán sản phẩm tài chính, giúp củng cố niềm tin.

## 12. Lợi thế cạnh tranh

FinSight không cạnh tranh bằng việc trở thành app ghi chép chi tiêu rẻ hơn. Lợi thế nằm ở cách chuyển từ tracking sang intelligence.

Các điểm khác biệt:

- Tập trung vào tương lai, không chỉ quá khứ.
- Không yêu cầu bank login.
- Kết hợp score, forecast, risk alerts và action plan trong một trải nghiệm.
- Phù hợp với người có thu nhập biến động như freelancer.
- Thiết kế sản phẩm giải thích được vấn đề và hành động cần làm, thay vì chỉ đưa biểu đồ.
- Định vị privacy-first, tránh mô hình kiếm tiền bằng bán dữ liệu hoặc cross-sell sản phẩm tài chính.

## 13. Roadmap phát triển

### Giai đoạn 1: Hoàn thiện MVP trình diễn

- Sửa các CTA chưa tồn tại để trỏ về `/demo` hoặc tạo route `/app`.
- Bổ sung validation input.
- Bổ sung kết quả chi tiết hơn cho score.
- Viết rõ disclaimer trong giao diện demo.
- Thêm empty state và error state.

### Giai đoạn 2: Backend và tài khoản người dùng

- Xây dựng authentication.
- Lưu hồ sơ tài chính theo user.
- Cho phép chỉnh sửa, cập nhật và xóa dữ liệu.
- Thiết kế database cho income, expenses, debts, goals và reports.
- Triển khai chính sách bảo mật và quyền riêng tư.

### Giai đoạn 3: AI và forecast thật

- Xây mô hình scoring đa yếu tố.
- Thêm forecast 6 tháng.
- Thêm rule-based recommendations trước, sau đó nâng cấp lên AI-generated recommendations có kiểm soát.
- Thêm scenario planning.
- Đo accuracy bằng dữ liệu thực tế đã ẩn danh hoặc synthetic dataset kiểm thử.

### Giai đoạn 4: File upload và tự động hóa

- Hỗ trợ PDF/CSV bank statement upload.
- Extract giao dịch.
- Tự động phân loại chi tiêu.
- Cho phép người dùng review và chỉnh category.
- Không yêu cầu bank credential.

### Giai đoạn 5: Thương mại hóa

- Triển khai subscription.
- Phân tách Free/Plus/Premium.
- Thêm email report.
- Đo activation, retention, conversion và churn.
- Mở pilot với nhóm người dùng mục tiêu.

## 14. Rủi ro và cách giảm thiểu

### Rủi ro 1: Người dùng không muốn nhập dữ liệu tài chính

Cách giảm thiểu:

- Không yêu cầu bank connection.
- Cho phép quick mode.
- Cho phép upload file trong bản sau.
- Giải thích rõ dữ liệu được dùng để làm gì.
- Cho phép xóa dữ liệu.

### Rủi ro 2: Claim AI quá mạnh so với sản phẩm hiện tại

Cách giảm thiểu:

- Trong pitch, phân biệt rõ prototype hiện tại và AI production roadmap.
- Bắt đầu bằng rule-based intelligence có thể giải thích được.
- Dùng AI để diễn giải và cá nhân hóa khuyến nghị sau khi có nền tảng logic rõ ràng.

### Rủi ro 3: Sai lệch dự báo tài chính

Cách giảm thiểu:

- Không trình bày forecast như cam kết tuyệt đối.
- Hiển thị confidence hoặc range.
- Cho phép người dùng chỉnh giả định.
- Dùng disclaimer rõ ràng.

### Rủi ro 4: Bảo mật dữ liệu

Cách giảm thiểu:

- Thiết kế privacy-first.
- Không lưu dữ liệu nếu không cần.
- Mã hóa dữ liệu production.
- Xây quyền xóa dữ liệu.
- Không bán dữ liệu hoặc dùng để quảng cáo tài chính.

### Rủi ro 5: Khó chuyển đổi trả phí

Cách giảm thiểu:

- Free plan phải cho thấy giá trị ngay.
- Paid plan phải gắn với kết quả cụ thể: forecast, cảnh báo, roadmap, báo cáo.
- Đo conversion theo từng nhóm persona.

## 15. Các câu hỏi giám khảo có thể hỏi và câu trả lời gợi ý

### FinSight có phải ngân hàng hoặc ứng dụng cho vay không?

Không. FinSight không giữ tiền, không cho vay và không bán sản phẩm tài chính. FinSight là công cụ phân tích sức khỏe tài chính cá nhân, giúp người dùng hiểu tình trạng hiện tại, dự báo rủi ro và lập kế hoạch hành động.

### Người dùng có cần kết nối tài khoản ngân hàng không?

Không cần. Định hướng của FinSight là cho phép nhập thủ công hoặc upload PDF/CSV statement. Cách này giảm lo ngại về credential và giúp người dùng kiểm soát dữ liệu tốt hơn.

### Input có quá nặng không?

Input hiện tại được chia thành từng bước nên không quá nặng cho một financial analysis demo. Bước chi tiêu là phần dài nhất, nhưng cần thiết để đưa ra kết quả có ý nghĩa. Trong roadmap, FinSight sẽ có quick mode, upload file và auto-categorization để giảm ma sát.

### AI hiện đã hoạt động thật chưa?

Trong MVP hiện tại, AI được mô phỏng ở tầng trải nghiệm. Demo dùng logic frontend để tính score và gợi ý cơ bản. Phần AI thật là bước phát triển tiếp theo, bao gồm scoring đa yếu tố, forecast, recommendation engine và AI coaching có kiểm soát.

### Financial Health Score tính như thế nào?

Trong demo, score được tính đơn giản dựa trên cash flow và savings rate để chứng minh concept. Trong bản production, score sẽ là mô hình đa yếu tố gồm thu nhập, chi tiêu, nợ, tiết kiệm, quỹ khẩn cấp, biến động dòng tiền và tiến độ mục tiêu.

### Dữ liệu người dùng có được lưu không?

Trong demo hiện tại, dữ liệu được xử lý ở frontend state và chưa có backend lưu trữ. Trong bản production, nếu có lưu dữ liệu, FinSight cần triển khai mã hóa, quyền xóa dữ liệu, kiểm soát truy cập và chính sách privacy rõ ràng.

### Vì sao người dùng trả tiền cho FinSight thay vì dùng spreadsheet?

Spreadsheet có thể ghi số liệu, nhưng không tự động diễn giải sức khỏe tài chính, dự báo rủi ro, tạo action plan và theo dõi mục tiêu theo thời gian. FinSight bán sự rõ ràng và khả năng ra quyết định, không chỉ bán bảng tính.

### Điểm khác biệt so với app budgeting là gì?

Budgeting app thường trả lời: "Bạn đã tiêu bao nhiêu?". FinSight hướng tới trả lời: "Điều gì sẽ xảy ra nếu bạn tiếp tục như hiện tại, và bạn nên làm gì tiếp theo?".

### Thiết kế web hiện tại đã đạt chuẩn trình bày với nhà đầu tư chưa?

Có, ở mức prototype/pitch. Website có thông điệp rõ, UI hiện đại, demo flow thật và các phần giải thích sản phẩm đầy đủ. Để đạt chuẩn production fintech, cần bổ sung backend, trang pháp lý, chính sách bảo mật thật, xử lý CTA chưa tồn tại và bằng chứng dữ liệu cho các claim marketing.

### Làm sao kiếm tiền mà không bán dữ liệu?

FinSight có thể dùng mô hình freemium subscription. Người dùng trả tiền cho forecast dài hơn, cảnh báo rủi ro, PDF/CSV upload, AI coaching, goal roadmap và báo cáo định kỳ. Dữ liệu người dùng không nên trở thành nguồn doanh thu chính.

### Sản phẩm có thể mở rộng thị trường như thế nào?

Bắt đầu từ người dùng cá nhân có vấn đề rõ: paycheck-to-paycheck, freelancer và goal saver. Sau đó có thể mở rộng sang B2B2C, ví dụ doanh nghiệp cung cấp FinSight như benefit tài chính cho nhân viên, hoặc trường đại học hỗ trợ sinh viên quản lý tài chính cá nhân.

## 16. Kết luận pitch

FinSight giải quyết một nhu cầu rất thực: người dùng không chỉ muốn biết họ đã tiêu gì, mà muốn biết tương lai tài chính của họ có an toàn không và họ nên hành động thế nào.

MVP hiện tại đã chứng minh được trải nghiệm cốt lõi: nhập dữ liệu, nhận phân tích, nhìn thấy điểm sức khỏe tài chính và nhận khuyến nghị. Đây là nền tảng tốt để tiếp tục phát triển thành một sản phẩm AI financial intelligence thật sự, với backend, bảo mật, dự báo, file upload và mô hình subscription.

Thông điệp dành cho giám khảo và nhà đầu tư:

FinSight không cố trở thành một ngân hàng mới. FinSight muốn trở thành lớp trí tuệ tài chính cá nhân giúp người dùng nhìn thấy rủi ro trước khi nó xảy ra, hiểu tiền của mình rõ hơn và từng bước xây dựng một tương lai tài chính an toàn hơn.
