const getHomePage = (req, res) => {
    res.send('Xin chào thế giới');
};

const getABC = (req, res) => {
    res.send('Check ABC');
};

const viduEJS = (req, res) => {
    res.render('sample'); // Đảm bảo bạn có file 'sample.ejs' trong thư mục views
};

module.exports = {
    getHomePage, getABC, viduEJS
};
