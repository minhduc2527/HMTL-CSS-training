var commentText = 'Để hiển thị được chuỗi chứa dấu gạch chéo ngược (\\) ta phải thêm dấu \\ vào trước hoặc sau nó'

//1.length
//  console.log commentText.length
console.log(commentText.lastIndexOf('được'))
console.log(commentText.search('được'))
console.log(commentText.slice(3,8))
console.log(commentText.replace('được','bằng'))
//split để căt điểm chung
 //trim cắt khoảng trống
 // lowercase là viết thường tất cả
 // uppercase là viết hoa tất cả
var age =18
var PI=3.14
console.log(age.toFixed())
var languages = ['js','php','ruby']
console.log(languages[2])
