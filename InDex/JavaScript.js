//　ローカルデータを読み込む
let arr = [
    { RegNum: 0, stuId : 5000000, uname: '日大太郎', age: 18, gender: '男', height: 170,weight: 60, city: '東京' }
]

let tbody = document.querySelector('tbody')　// tbodyの取得する
let add = document.querySelector('.add')　//追加属性
let stuId = document.querySelector('.stuId') //学生番号を追加する
let uname = document.querySelector('.uname') //名前を追加する
let age = document.querySelector('.age')　//年齢を追加する
let gender = document.querySelector('.gender')　//性別を選択する
let height = document.querySelector('.height') //身長を追加する
let weight = document.querySelector('.weight') //体重を追加する
let city = document.querySelector('.city')　//出身地を選択する

function render() {

    // データをきれいにする
    tbody.innerHTML = ''
    // 新しいデータのレンダリング
    for (let i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr')
        // trの中にデータを入力する
        tr.innerHTML = `
        <td>${arr[i].RegNum}</td>
        <td>${arr[i].stuId}</td>
        <td>${arr[i].uname}</td>
        <td>${arr[i].age}</td>
        <td>${arr[i].gender}</td>
        <td>${arr[i].height}</td>
        <td>${arr[i].weight}</td>
        <td>${arr[i].city}</td>
        <td>
          <a href="javascript:" id="${i}">削除</a>
        </td>
        `
        // データが親データに追加する
        tbody.appendChild(tr)
    }
}

render()

add.addEventListener('click', function () {

    //表のデータを読み込む
    arr.push({
        RegNum: arr[arr.length - 1].RegNum + 1,
        stuId: stuId.value,
        uname: uname.value,
        age: age.value,
        gender: gender.value,
        height: height.value,
        weight: weight.value,
        city: city.value
    })
    // 関数をリレンダリングする。
    render()
    // データを元に戻す
    stuId.value = uname.value = age.value = height.value = weight.value = ''
    gender.value = '男'
    city.value = '東京'
})

//削除関数
tbody.addEventListener('click', function (e) {

    if (e.target.tagName === 'A') {
        arr.splice(e.target.id, 1)
        render()
    }
})

