import React,{ useEffect, useState } from "react";

export const Markup = (props) => {
    console.log(props);
return `<div class="ndfHFb-c4YZDc-cYSp0e-DARUcf" style="padding-bottom: 141.424%;"><div class="ndfHFb-c4YZDc-cYSp0e-DARUcf-PLDbbf"></div><div class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-bN97Pc-haAclf"><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 23.1933%; top: 3.44418%; width: 56.1345%; height: 2.13777%;">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 34.2857%; top: 5.58195%; width: 33.7815%; height: 2.13777%;">Độc lập – Tự do – Hạnh phúc
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 9.57983%; top: 12.114%; width: 26.7227%; height: 1.66271%;">Tên đơn vị: …………………
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 9.57983%; top: 13.7767%; width: 84.0336%; height: 1.66271%;">Sổ:${props} Hà Nội, ngày .... tháng … năm 20..
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 32.605%; top: 18.7648%; width: 37.3109%; height: 2.73159%;">HỢP ĐỒNG LAO ĐỘNG
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 10.5882%; top: 23.0404%; width: 81.8487%; height: 1.66271%;">(Ban hành kèm theo TT số 21/2003/TT – BLĐTBXH ngày 22/9/2003 của Bộ Lao Động – Thương
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 44.7059%; top: 24.7031%; width: 12.9412%; height: 1.66271%;">binh và Xã hội)
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 9.57983%; top: 29.6912%; width: 73.9496%; height: 1.78147%;">Chúng tôi, một bên là Ông: ………………… Quốc tịch: ………………….
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 9.57983%; top: 31.4727%; width: 67.0588%; height: 1.78147%;">Chức vụ : ………………………..
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 9.57983%; top: 33.2542%; width: 67.395%; height: 1.78147%;">Đại diện cho (1) : …………………………………………………..
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 9.57983%; top: 35.0356%; width: 67.0588%; height: 1.78147%;">Địa chỉ: ……………………………………………………………………….
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 9.57983%; top: 37.0546%; width: 73.1092%; height: 1.78147%;">Và một bên là Bà: ……………………………. Quốc tịch : ……………….
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 9.57983%; top: 38.8361%; width: 41.5126%; height: 1.78147%;">Sinh ngày … tháng … năm …… tại ………….
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 9.57983%; top: 40.6176%; width: 15.4622%; height: 1.78147%;">Nghề nghiệp (2):
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 9.57983%; top: 42.399%; width: 44.0336%; height: 1.78147%;">Địa chỉ thường trú: ……………………………….
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 9.57983%; top: 44.1805%; width: 81.8487%; height: 1.78147%;">Số CCCD: ……………….. Cấp ngày …/…/… tại Cục CS ĐKQL cư trú và DLQG về dân cư
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 9.57983%; top: 45.962%; width: 54.7899%; height: 1.78147%;">Số sổ lao động (nếu có): Cấp ngày / / tại
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 9.57983%; top: 49.5249%; width: 75.6303%; height: 1.78147%;">Thỏa thuận ký kết hợp đồng lao động và cam kết làm đúng những điều khoản sau đây:
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 9.57983%; top: 53.0879%; width: 41.5126%; height: 1.90024%;">Điều 1. Thời hạn và công việc hợp đồng
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 12.605%; top: 54.9881%; width: 43.8655%; height: 1.78147%;">- Loại hợp đồng lao động (3): Xác định thời hạn
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 12.605%; top: 56.7696%; width: 32.2689%; height: 1.78147%;">Từ ngày … tháng … năm 20…
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 12.605%; top: 58.5511%; width: 61.6807%; height: 1.78147%;">- Thử việc từ ngày tháng năm đến ngày tháng năm
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 9.57983%; top: 60.3325%; width: 64.7059%; height: 1.78147%;">Địa điểm làm việc (4):………………………………………………………….
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 12.605%; top: 62.4703%; width: 35.9664%; height: 1.90024%;">- Chức danh chuyên môn: ……………
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 12.605%; top: 64.3705%; width: 19.3277%; height: 1.78147%;">- Chức vụ (nếu có):
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 12.605%; top: 66.152%; width: 80.8403%; height: 1.78147%;">- Công việc phải làm (5): Theo sự phân công của kế toán trưởng, giám đốc, và các công
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 15.6303%; top: 67.9335%; width: 32.7731%; height: 1.78147%;">việc có liên quan khác khi có yêu cầu
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 9.57983%; top: 71.4964%; width: 25.5462%; height: 1.90024%;">Điều 2. Chế độ làm việc:
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 12.605%; top: 73.3967%; width: 43.5294%; height: 1.78147%;">- Thời giờ làm việc (6): 8 giờ/ngày, 6 ngày/tuần
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 12.605%; top: 75.1781%; width: 62.3529%; height: 1.78147%;">- Được cấp phát những dụng cụ làm việc gồm: máy vi tính, máy tính.
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 11.0924%; top: 78.6223%; width: 50.084%; height: 1.90024%;">Điều 3. Nghĩa vụ và quyền lợi của người lao động:
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 12.605%; top: 80.5226%; width: 10.7563%; height: 1.78147%;">1-Quyền lơi
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 12.605%; top: 82.304%; width: 45.042%; height: 1.78147%;">- Phương tiện đi lại làm việc (7): nhân viên tự túc
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 12.605%; top: 84.0855%; width: 54.2857%; height: 1.78147%;">- Mức lương chính hoặc tiền công (8): ……………. đ/tháng
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 12.605%; top: 85.867%; width: 28.5714%; height: 1.78147%;">- Hình thức trả lương: tiền mặt
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 12.605%; top: 87.5297%; width: 18.1513%; height: 1.78147%;">- Phụ cấp gồm (9):
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 15.6303%; top: 89.3112%; width: 23.3613%; height: 1.78147%;">+ Ăn ca: ………. đ/ ngày.
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 15.6303%; top: 91.0926%; width: 22.521%; height: 1.78147%;">+ Nhà ở: ……… đ/ tháng
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 15.6303%; top: 92.8741%; width: 24.5378%; height: 1.78147%;">+ Xăng xe: ……… đ/ tháng
</p><p class="ndfHFb-c4YZDc-cYSp0e-DARUcf-Df1ZY-eEGnhe" style="left: 15.6303%; top: 94.6556%; width: 24.0336%; height: 1.78147%;">+ Điện thoại: ……. đ/tháng
</p></div><div class="ndfHFb-c4YZDc-cYSp0e-wxLEad-sn54Q" style="display: none;"></div><div class="ndfHFb-c4YZDc-vWsuo-fmcmS-IDNFyf ndfHFb-c4YZDc-vWsuo-fmcmS-gvZm2b"></div><div class="ndfHFb-c4YZDc-vWsuo-fmcmS-IDNFyf ndfHFb-c4YZDc-vWsuo-fmcmS-G0jgYd"></div><div class="ndfHFb-c4YZDc-vWsuo-fmcmS-IDNFyf ndfHFb-c4YZDc-vWsuo-fmcmS-G0jgYd"></div><div class="ndfHFb-c4YZDc-vWsuo-fmcmS-IDNFyf ndfHFb-c4YZDc-cYSp0e-oYxtQd-gvZm2b"></div><canvas class="ndfHFb-c4YZDc-cYSp0e-DARUcf-M1R4Ee-UzWXSb" width="1000" height="1414.2449185284731" aria-hidden="true" style="opacity: 1;"></canvas></div>
`;
};
