#!/bin/bash

# Đảm bảo bạn đang ở nhánh change-build
git checkout change-build || { echo "Không tìm thấy nhánh change-build"; exit 1; }

# Tạo nhánh tạm từ commit hiện tại của develop (backup)
git branch backup-develop develop

# Chuyển sang nhánh develop
git checkout develop

# Reset develop theo commit hiện tại của change-build
git reset --hard change-build

# Force push để xóa toàn bộ commit cũ và thay bằng commit mới
git push origin develop --force

echo "✅ Đã ghi đè nhánh develop bằng commit từ change-build."
echo "🧯 Nếu cần khôi phục lịch sử cũ, hãy dùng nhánh backup-develop."