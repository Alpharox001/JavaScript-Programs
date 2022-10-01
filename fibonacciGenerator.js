function fibonacci(n){
    let series = [];

    if(n === 1){
        series = [1];
    }else if(n == 2){
        series = [0, 1];
    }else{
        series = [0, 1];
        
        for (let index = 2; index < n; index++) {
            series.push(series[series.length - 2] + series[series.length - 1]);
        }
    }

    return series;
}

series = fibonacci(5);
console.log(series);
