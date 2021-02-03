console.log('simonj의 메크로 프로그램을 사용해주셔서 감사합니다.')
function start() {
$('.editDescriptionBtn').trigger('click')
$('.editConfirmBtn').trigger('click')
console.log('작품이 업데이트되었습니다')
}
start()
setInterval(start, (30000))
