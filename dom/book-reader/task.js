const fontSizes = Array.from(document.querySelectorAll('.font-size'));
const colors = Array.from(document.querySelectorAll('.book__control_color')[0].children)
                .filter(el => !el.nodeName.toLowerCase().includes("span"));
const bgColors = Array.from(document.querySelectorAll('.book__control_background')[0].children)
                .filter(el => !el.nodeName.toLowerCase().includes("span"));
const books = Array.from(document.querySelectorAll('.book__content'));

const booksFSCollection = ['book_fs-small', 'book_fs', 'book_fs-big'];
const bookColorsCollection = ['book_color-black', 'book_color-gray', 'book_color-whitesmoke'];
const bookBGColorCollection = ['book_bg-black', 'book_bg-gray', 'book_bg-white'];


let activeFontSize;
let activeColor;
let activeBGColor;

fontSizes.forEach((fontSize) => {
    fontSize.addEventListener('click', (event) => {
        activeFontSize = fontSizes.indexOf(fontSize);
        event.preventDefault();
        fontSizes.forEach((fontSize) => {
            fontSize.classList.remove('font-size_active');
        });
        fontSize.classList.add('font-size_active');

        books.forEach((book) => {
            book.classList.remove('book_fs-big', 'book_fs-small');
        });

        books[0].classList.add(booksFSCollection[activeFontSize]);
        
    });
});

colors.forEach((color) => {
    color.addEventListener('click', (event) => {
        activeColor = colors.indexOf(color);
        event.preventDefault();
        colors.forEach((color) => {
            color.classList.remove('color_active');
        });
        color.classList.add('color_active');

        books.forEach((book) => {
            book.classList.remove(...bookColorsCollection);
        });

        books[0].classList.add(bookColorsCollection[activeColor]);
        
    });
});

bgColors.forEach((bgColor) => {
    bgColor.addEventListener('click', (event) => {
        activeBGColor = bgColors.indexOf(bgColor);
        event.preventDefault();
        bgColors.forEach((bgColor) => {
            bgColor.classList.remove('color_active');
        });
        bgColor.classList.add('color_active');

        books.forEach((book) => {
            book.classList.remove(...bookBGColorCollection);
        });

        books[0].classList.add(bookBGColorCollection[activeBGColor]);
        
    });
});