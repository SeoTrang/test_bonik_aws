const slugify = require('slugify');

const convertToSlug = {
    convert:async(value)=>{
     
        const slug = slugify(value, {
        replacement: '-',    // ký tự thay thế cho khoảng trắng và ký tự đặc biệt
        remove: /[*+~.()'"!:@]/g,   // loại bỏ ký tự đặc biệt
        lower: true          // chuyển tất cả ký tự thành chữ thường
        });

        return slug;
    }
}

module.exports =convertToSlug;