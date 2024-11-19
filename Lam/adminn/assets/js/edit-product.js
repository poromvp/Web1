function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Lấy ID sản phẩm từ URL
const productId = getQueryParam('id-sp');

fetchProductData(productId).then(product => {
    // Điền thông tin sản phẩm vào các trường trong form
    document.getElementById('productName').value = product.name;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productType').value = product.type;
    //document.getElementById('expiryDate').value = product.expiryDate;

    // Điền thẻ sản phẩm
    //const tagsInput = document.getElementById('inputTag');
    //tagsInput.value = product.tags.join(', '); // Chuyển đổi mảng thẻ thành chuỗi

    document.getElementById('costPrice').value = product.costPrice;
    document.getElementById('sellingPrice').value = product.sellingPrice;
    document.getElementById('salePrice').value = product.salePrice;

    // Khởi tạo các plugin như Select2 và TagsInput nếu cần
    $('.j-example-basic-single').val(product.category).trigger('change');
    $('.js-example-basic-single').val(product.type).trigger('change');
    $('#inputTag').tagsinput('add', product.tags);
});

// Xử lý sự kiện khi form được gửi
document.getElementById('editProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Xử lý cập nhật sản phẩm ở đây
    const updatedProduct = {
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        type: document.getElementById('productType').value,
        expiryDate: document.getElementById('expiryDate').value,
        tags: document.getElementById('inputTag').value.split(', '),
        costPrice: document.getElementById('costPrice').value,
        sellingPrice: document.getElementById('sellingPrice').value,
        salePrice: document.getElementById('salePrice').value
    };

    // Gửi dữ liệu cập nhật đến server hoặc xử lý theo cách bạn muốn
    console.log(updatedProduct);
});