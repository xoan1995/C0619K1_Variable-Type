let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function () {
        return this.day ;
    };
    this.getMonth = function () {
        return this.month;
    };
    this.getYear = function () {
        return this.year
    };
    this.setDay = function (day) {
        this.day = day;
    };
    this.setMonth = function (month) {
        this.month = month;
    };
    this.setYear = function (year) {
        this.year = year;
    };
    this.setDate=function (day, month, year) {
        this.day=day;
        this.month=month;
        this.year=year;
    };
    this.toString= function (day, month, year) {
        alert(day+"/"+month+"/"+year);
    }
};
let date = new MyDate(1, 2, 2011);

date.setDate(20,3,2010);
let day1 = date.getDay();
let month1 = date.getMonth();
let year1 = date.getYear();
date.toString(day1, month1, year1);
