export function getScore(score){
	if (score !== -1) {
		let res = Math.round(score)
		return res/2
	}else {
		return 'zaneu'
	}
}
