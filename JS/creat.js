// 看板
const board_content = document.getElementById('board_content')

for (let j = 6; j >= 1; j--) {
	const tr_board = document.createElement('tr')
	tr_board.classList.add('tr_board')
	tr_board.classList.add(`tr_board_${j}`)
	tr_board.id = `tr_board_${j}`
	table_board.prepend(tr_board)
	for (let k = 22; k >= 1; k--) {
		const td_board = document.createElement('td')
		td_board.classList.add('td_board')
		td_board.classList.add(`td_board_${k}`)
		tr_board.prepend(td_board)
		// td_board.innerText = k
	}
}

// 看板線
for (let j = 8; j >= 1; j--) {
	const tr_line = document.createElement('tr')
	tr_line.classList.add('tr_line')
	tr_line.classList.add(`tr_line_${j}`)
	tr_line.id = `tr_line_${j}`
	table_line.prepend(tr_line)
	for (let k = 1; k >= 1; k--) {
		const td_line = document.createElement('td')
		td_line.classList.add('td_line')
		td_line.classList.add(`td_line_${k}`)
		tr_line.prepend(td_line)
	}
}

// 按鈕
const btn_content = document.getElementById('btn_content')
for (let i = 4; i >= 1; i--) {
	const table_btn = document.createElement('table')
	table_btn.classList.add(`table_btn_${i}`)
	table_btn.classList.add('table_btn')
	table_btn.id = `table_btn_${i}`
	btn_content.prepend(table_btn)
	for (let j = 3; j >= 1; j--) {
		const tr_btn = document.createElement('tr')
		tr_btn.classList.add('tr_btn')
		tr_btn.classList.add(`tr_btn_${j}`)
		tr_btn.id = `tr_btn_${j}`
		table_btn.prepend(tr_btn)
		for (let k = 3; k >= 1; k--) {
			const td_btn = document.createElement('td')
			td_btn.classList.add('td_btn')
			td_btn.classList.add(`td_btn_${k}`)
			tr_btn.prepend(td_btn)
			// td_btn.innerText = k
		}
	}
}

const table_btn_1 = document.getElementById('table_btn_1')
const table_btn_2 = document.getElementById('table_btn_2')
const table_btn_3 = document.getElementById('table_btn_3')
const table_btn_4 = document.getElementById('table_btn_4')
const clock_id = document.getElementById('clock')

// 按鈕動-下
let ClockMoveDown = false
const downMouseover = () => {
	clock_id.style.transform = `scale(112%) translate(0,calc(20.6vh  - 55px)) `
}
const downMouseout = () => {
	clock_id.style.transform = 'scale(100%) translate(0,calc(20.6vh))'
}

table_btn_1.addEventListener('click', () => {
	if (ClockMoveDown === false) {
		clock_id.classList.add('clockMove')
		table_mario.classList.add('marioMove')
		table_mario_back.classList.add('marioMove')

		clock_id.addEventListener('mouseover', downMouseover)
		clock_id.addEventListener('mouseout', downMouseout)

		const clockMove_position = setTimeout(() => {
			clock_id.style.transform = 'translate(0, 20.6vh)'
			table_mario.style.transform = 'translate(0, 50vh)'
			table_mario_back.style.transform = 'translate(0, 50vh)'
			clock_id.classList.remove('clockMove')
			table_mario.classList.remove('marioMove')
			table_mario_back.classList.remove('marioMove')
		}, 2500)
		ClockMoveDown = true
	} else {
		Swal.fire('哎呀! 馬力歐已經躲在水管裡囉!')
	}
})

// 按鈕動-上
table_btn_2.addEventListener('click', () => {
	if (ClockMoveDown !== false) {
		clock_id.removeEventListener('mouseover', downMouseover)
		clock_id.removeEventListener('mouseout', downMouseout)

		clock_id.classList.add('clockMoveUp')
		table_mario.classList.add('marioMoveUp')
		table_mario_back.classList.add('marioMoveUp')
		ClockMoveDown = false

		const clockMove_positionUp = setTimeout(() => {
			clock_id.style.transform = ''
			table_mario.style.transform = ''
			table_mario_back.style.transform = ''
			clock_id.classList.remove('clockMoveUp')
			table_mario.classList.remove('marioMoveUp')
			table_mario_back.classList.remove('marioMoveUp')
		}, 2500)
	} else {
		Swal.fire('馬力歐已站在水管上勒~~~')
	}
})

// 按鈕動-夜
table_btn_3.addEventListener('click', () => {
	background_change_night()

	setTimeout(() => {
		background_change_sun()
	}, 60000)
})

// 按鈕動-日
table_btn_4.addEventListener('click', () => {
	background_change_sun()

	setTimeout(() => {
		background_change_night()
	}, 60000)
})

// 壞香菇-R
const bad_mushroom_content = document.getElementById('bad_mushroom_content')
for (let i = 1; i >= 1; i--) {
	const bad_mushroom_R = document.createElement('table')
	bad_mushroom_R.classList.add('bad_mushroom')
	bad_mushroom_R.classList.add('bad_mushroom_R')
	bad_mushroom_R.id = `bad_mushroom_${i}`
	bad_mushroom_R.id = `bad_mushroom_R_${i}`
	bad_mushroom_R.id = `bad_mushroom_R`
	bad_mushroom_content.prepend(bad_mushroom_R)
	for (let j = 12; j >= 1; j--) {
		const tr_bad_mushroom = document.createElement('tr')
		tr_bad_mushroom.classList.add('tr_bad_mushroom')
		tr_bad_mushroom.id = `tr_bad_mushroom_${j}`
		tr_bad_mushroom.id = `tr_bad_mushroom_R_${j}`
		bad_mushroom_R.prepend(tr_bad_mushroom)
		for (let k = 12; k >= 1; k--) {
			const td_bad_mushroom = document.createElement('td')
			td_bad_mushroom.classList.add('td_bad_mushroom')
			td_bad_mushroom.classList.add(`td_bad_mushroom_${k}`)
			tr_bad_mushroom.prepend(td_bad_mushroom)
			// td_bad_mushroom.innerText = k
		}
	}
}

// 壞香菇-L
for (let i = 1; i >= 1; i--) {
	const bad_mushroom_L = document.createElement('table')
	bad_mushroom_L.classList.add('bad_mushroom')
	bad_mushroom_L.classList.add('bad_mushroom_L')
	bad_mushroom_L.id = `bad_mushroom_${i}`
	bad_mushroom_L.id = `bad_mushroom_L_${i}`
	bad_mushroom_L.id = `bad_mushroom_L`
	bad_mushroom_content.prepend(bad_mushroom_L)
	for (let j = 12; j >= 1; j--) {
		const tr_bad_mushroom = document.createElement('tr')
		tr_bad_mushroom.classList.add('tr_bad_mushroom')
		tr_bad_mushroom.classList.add(`tr_bad_mushroom_${j}`)
		tr_bad_mushroom.id = `tr_bad_mushroom_${j}`
		tr_bad_mushroom.id = `tr_bad_mushroom_L_${j}`
		bad_mushroom_L.prepend(tr_bad_mushroom)
		for (let k = 12; k >= 1; k--) {
			const td_bad_mushroom = document.createElement('td')
			td_bad_mushroom.classList.add('td_bad_mushroom')
			td_bad_mushroom.classList.add(`td_bad_mushroom_${k}`)
			tr_bad_mushroom.prepend(td_bad_mushroom)
			// td_bad_mushroom.innerText = k
		}
	}
}
const bad_mushroom_R = document.getElementById('bad_mushroom_R')
const bad_mushroom_L = document.getElementById('bad_mushroom_L')

// 壞香菇 L、R 交換
const bad_mushroom_change = () => {
	if (bad_mushroom_R.style.display === 'none') {
		bad_mushroom_R.style.display = 'block'
		bad_mushroom_L.style.display = 'none'
	} else {
		bad_mushroom_L.style.display = 'block'
		bad_mushroom_R.style.display = 'none'
	}
}

setInterval(bad_mushroom_change, 300)

// 壞香菇被擊落
bad_mushroom_content.addEventListener('click', (event) => {
	const mouseX = event.clientX
	// console.log(mouseX, 'event.clientX')
	const left = bad_mushroom_content.getBoundingClientRect().left
	// console.log(bad_mushroom_content.getBoundingClientRect(), 'bad_mushroom_content.getBoundingClientRect()')
	// console.log(left, 'bad_mushroom_content.getBoundingClientRect().left')
	bad_mushroom_content.style.left = left + 'px'
	bad_mushroom_content.classList.add('bad_mushroom_die')
	setTimeout(() => {
		bad_mushroom_content.classList.remove('bad_mushroom_die')
	}, 3000)
})

// 對照壞香菇用
// const bad = document.getElementById('bad')
// for (let i = 1; i >= 1; i--) {
// 	const bad = document.createElement('table')
// 	bad.classList.add('bad')
// 	bad.id = `bad_${i}`
// 	bad_mushroom_content.prepend(bad)
// 	for (let j = 12; j >= 1; j--) {
// 		const tr_bad = document.createElement('tr')
// 		tr_bad.classList.add('tr_bad')
// 		tr_bad.id = `tr_bad_${j}`

// 		bad.prepend(tr_bad)
// 		for (let k = 1; k >= 1; k--) {
// 			const td_bad = document.createElement('td')
// 			td_bad.classList.add('td_bad')
// 			td_bad.classList.add(`td_bad_${k}`)
// 			tr_bad.prepend(td_bad)
// 			td_bad.innerText = j
// 		}
// 	}
// }

// 水管
const pipe_content = document.getElementById('pipe_content')
for (let i = 1; i >= 1; i--) {
	const pipe = document.createElement('table')
	pipe.classList.add('pipe')
	pipe.id = `pipe_${i}`
	pipe_content.prepend(pipe)
	for (let j = 9; j >= 1; j--) {
		const tr_pipe = document.createElement('tr')
		tr_pipe.classList.add('tr_pipe')
		tr_pipe.id = `tr_pipe_${j}`
		pipe.prepend(tr_pipe)
		for (let k = 14; k >= 1; k--) {
			const td_pipe = document.createElement('td')
			td_pipe.classList.add('td_pipe')
			td_pipe.classList.add(`td_pipe_${k}`)
			tr_pipe.prepend(td_pipe)
			// td_pipe.innerText = k
		}
	}
}

// 馬力歐
const table_mario = document.getElementById('table_mario')
for (let i = 16; i >= 1; i--) {
	const tr_mario = document.createElement('tr')
	tr_mario.classList.add('tr_mario')
	tr_mario.id = `tr_mario_${i}`
	table_mario.prepend(tr_mario)

	for (let j = 14; j >= 1; j--) {
		const td_mario = document.createElement('td')
		td_mario.classList.add('td_mario')
		td_mario.classList.add(`td_mario_${j}`)
		tr_mario.prepend(td_mario)
		// td_mario.innerText = j
	}
}

// 馬力歐back
const table_mario_back = document.getElementById('table_mario_back')
for (let i = 16; i >= 1; i--) {
	const tr_mario_back = document.createElement('tr')
	tr_mario_back.classList.add('tr_mario')
	tr_mario_back.id = `tr_mario_${i}`
	table_mario_back.prepend(tr_mario_back)

	for (let j = 1; j <= 14; j++) {
		const td_mario_back = document.createElement('td')
		td_mario_back.classList.add('td_mario')
		td_mario_back.classList.add(`td_mario_${j}`)
		tr_mario_back.prepend(td_mario_back)
	}
}

// 碰到馬力歐 轉向
position_mario.addEventListener('mouseenter', () => {
	if (table_mario_back.style.display === 'none') {
		table_mario_back.style.display = 'block'
		table_mario.style.display = 'none'
	} else {
		table_mario.style.display = 'block'
		table_mario_back.style.display = 'none'
	}
})

// 天上的石頭
const upStone_content = document.getElementById('upStone_content')
for (let i = 3; i >= 1; i--) {
	const upStone = document.createElement('div')
	upStone.classList.add('upStone')
	upStone.id = `upStone_${i}`
	upStone_content.prepend(upStone)
	for (let j = 1; j >= 1; j--) {
		const table_upStone = document.createElement('table')
		table_upStone.classList.add('table_upStone')
		table_upStone.id = `table_upStone_${j}`
		upStone.prepend(table_upStone)
		for (let k = 7; k >= 1; k--) {
			const tr_upStone = document.createElement('tr')
			tr_upStone.classList.add('tr_upStone')
			tr_upStone.id = `tr_upStone_${k}`
			table_upStone.prepend(tr_upStone)
			for (let l = 9; l >= 1; l--) {
				const td_upStone = document.createElement('td')
				td_upStone.classList.add('td_upStone')
				td_upStone.classList.add(`td_upStone_${l}`)
				tr_upStone.prepend(td_upStone)
				td_upStone.innerText = l
			}
		}
	}
}

const upStone_1 = document.getElementById('upStone_1')
const upStone_2 = document.getElementById('upStone_2')
const upStone_3 = document.getElementById('upStone_3')

const upStone_rotate = [upStone_1, upStone_2, upStone_3]
upStone_rotate.forEach((element, index) => {
	element.addEventListener('mouseover', () => {
		element.classList.add('upStone_rotate')
	})
	element.addEventListener('mouseout', () => {
		element.classList.remove('upStone_rotate')
	})
})

// 地上石頭
const stone_content = document.getElementById('stone_content')
for (let i = 42; i >= 1; i--) {
	const stone = document.createElement('div')
	stone.classList.add('stone')
	stone.id = `stone_${i}`
	stone_content.prepend(stone)
	for (let j = 1; j >= 1; j--) {
		const table_stone = document.createElement('table')
		table_stone.classList.add('table_stone')
		table_stone.id = `table_stone_${j}`
		stone.prepend(table_stone)
		for (let k = 6; k >= 1; k--) {
			const tr_stone = document.createElement('tr')
			tr_stone.classList.add('tr_stone')
			tr_stone.id = `tr_stone_${k}`
			table_stone.prepend(tr_stone)
			for (let l = 7; l >= 1; l--) {
				const td_stone = document.createElement('td')
				td_stone.classList.add('td_stone')
				td_stone.classList.add(`td_stone_${l}`)
				tr_stone.prepend(td_stone)
				td_stone.innerText = l
			}
		}
	}
}

// 時鐘色
const table_clock = document.getElementById('table_clock')
for (let i = 30; i >= 1; i--) {
	const tr = document.createElement('tr')
	tr.classList.add('tr_clock')
	tr.id = `tr_clock_${i}`
	table_clock.prepend(tr)
	for (let j = 30; j >= 1; j--) {
		const td = document.createElement('td')
		td.classList.add('td_clock')
		td.classList.add(`td_clock_${j}`)
		// let a = 1
		// td.id = `td_clock_${j}`
		td.innerText = `${j}`
		tr.prepend(td)
	}
}

// 時針
const hourHand = document.getElementById('hourHand')
for (let i = 5; i >= 1; i--) {
	const tr_hour = document.createElement('tr')
	tr_hour.classList.add('tr_hour')
	hourHand.prepend(tr_hour)
	for (let j = 1; j >= 1; j--) {
		const td_hour = document.createElement('td')
		td_hour.classList.add('td_hour')
		tr_hour.prepend(td_hour)
	}
}

// 分針
const minuteHand = document.getElementById('minuteHand')
for (let i = 9; i >= 1; i--) {
	const tr_Minute = document.createElement('tr')
	tr_Minute.classList.add('tr_Minute')
	minuteHand.prepend(tr_Minute)
	for (let j = 1; j >= 1; j--) {
		const td_Minute = document.createElement('td')
		td_Minute.classList.add('td_Minuter')
		tr_Minute.prepend(td_Minute)
	}
}

// 讓指針動起來
const secondHand = document.getElementById('secondHand')
const clock = () => {
	const date = new Date()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()
	hourHand.style.transform = `rotate(${hour * 30 + 180 + minute * 0.5}deg)`
	minuteHand.style.transform = `rotate(${minute * 6 + 180}deg)`
	secondHand.style.transform = `rotate(${second * 6 + 180}deg)`
}

setInterval(clock, 1000)
clock()

// 刻數字
const zero = []
const one = []
const two = []
const three = []
const four = []
const five = []
const six = []
const seven = []
const eight = []
const nine = []

// const text = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
for (let i = 1; i <= 6; i++) {
	// 陣列的寫法
	// for (let j = 0; j <= 9; j++) {
	//   eval(`
	//       ${text[j]}[i] = document.createElement('table')
	//       ${text[j]}[i].classList.add('${text[j]}')
	//       ${text[j]}[i].id = "zero_${i}"
	//     `)
	// }
	zero[i] = document.createElement('table')
	zero[i].classList.add('zero')
	zero[i].id = `zero_${i}`

	one[i] = document.createElement('table')
	one[i].classList.add('one')
	one[i].id = `one_${i}`

	two[i] = document.createElement('table')
	two[i].classList.add('two')
	two[i].id = `(two_${i}`

	three[i] = document.createElement('table')
	three[i].classList.add('three')
	three[i].id = `three_${i}`

	four[i] = document.createElement('table')
	four[i].classList.add('four')
	four[i].id = `four_${i}`

	five[i] = document.createElement('table')
	five[i].classList.add('five')
	five[i].id = `five_${i}`

	six[i] = document.createElement('table')
	six[i].classList.add('six')
	six[i].id = `six_${i}`

	seven[i] = document.createElement('table')
	seven[i].classList.add('seven')
	seven[i].id = `seven_${i}`

	eight[i] = document.createElement('table')
	eight[i].classList.add('eight')
	eight[i].id = `eight_${i}`

	nine[i] = document.createElement('table')
	nine[i].classList.add('nine')
	nine[i].id = `nine_${i}`

	for (let j = 5; j >= 1; j--) {
		const tr_zero = document.createElement('tr')
		tr_zero.classList.add('tr_zero')
		tr_zero.classList.add(`tr_zero_${j}`)
		tr_zero.id = `tr_zero_${j}`
		zero[i].prepend(tr_zero)

		const tr_one = document.createElement('tr')
		tr_one.classList.add('tr_one')
		tr_one.classList.add(`tr_one_${j}`)
		tr_one.id = `tr_one_${j}`
		one[i].prepend(tr_one)

		const tr_two = document.createElement('tr')
		tr_two.classList.add('tr_two')
		tr_two.classList.add(`tr_two_${j}`)
		tr_two.id = `tr_two_${j}`
		two[i].prepend(tr_two)

		const tr_three = document.createElement('tr')
		tr_three.classList.add('tr_three')
		tr_three.classList.add(`tr_three_${j}`)
		tr_three.id = `tr_three_${j}`
		three[i].prepend(tr_three)

		const tr_four = document.createElement('tr')
		tr_four.classList.add('tr_four')
		tr_four.classList.add(`tr_four_${j}`)
		tr_four.id = `tr_four_${j}`
		four[i].prepend(tr_four)

		const tr_five = document.createElement('tr')
		tr_five.classList.add('tr_five')
		tr_five.classList.add(`tr_five_${j}`)
		tr_five.id = `tr_five_${j}`
		five[i].prepend(tr_five)

		const tr_six = document.createElement('tr')
		tr_six.classList.add('tr_six')
		tr_six.classList.add(`tr_six_${j}`)
		tr_six.id = `tr_six_${j}`
		six[i].prepend(tr_six)

		const tr_seven = document.createElement('tr')
		tr_seven.classList.add('tr_seven')
		tr_seven.classList.add(`tr_seven_${j}`)
		tr_seven.id = `tr_seven_${j}`
		seven[i].prepend(tr_seven)

		const tr_eight = document.createElement('tr')
		tr_eight.classList.add('tr_eight')
		tr_eight.classList.add(`tr_eight_${j}`)
		tr_eight.id = `tr_eight_${j}`
		eight[i].prepend(tr_eight)

		const tr_nine = document.createElement('tr')
		tr_nine.classList.add('tr_nine')
		tr_nine.classList.add(`tr_nine_${j}`)
		tr_nine.id = `tr_nine_${j}`
		nine[i].prepend(tr_nine)

		for (let k = 4; k >= 1; k--) {
			const td_zero = document.createElement('td')
			td_zero.classList.add('td_zero')
			td_zero.classList.add(`td_zero_${k}`)
			td_zero.innerText = k
			tr_zero.prepend(td_zero)

			const td_one = document.createElement('td')
			td_one.classList.add('td_one')
			td_one.classList.add(`td_one_${k}`)
			td_one.innerText = k
			tr_one.prepend(td_one)

			const td_two = document.createElement('td')
			td_two.classList.add('td_two')
			td_two.classList.add(`td_two_${k}`)
			td_two.innerText = k
			tr_two.prepend(td_two)

			const td_three = document.createElement('td')
			td_three.classList.add('td_three')
			td_three.classList.add(`td_three_${k}`)
			td_three.innerText = k
			tr_three.prepend(td_three)

			const td_four = document.createElement('td')
			td_four.classList.add('td_four')
			td_four.classList.add(`td_four_${k}`)
			td_four.innerText = k
			tr_four.prepend(td_four)

			const td_five = document.createElement('td')
			td_five.classList.add('td_five')
			td_five.classList.add(`td_five_${k}`)
			td_five.innerText = k
			tr_five.prepend(td_five)

			const td_six = document.createElement('td')
			td_six.classList.add('td_six')
			td_six.classList.add(`td_six_${k}`)
			td_six.innerText = k
			tr_six.prepend(td_six)

			const td_seven = document.createElement('td')
			td_seven.classList.add('td_seven')
			td_seven.classList.add(`td_seven_${k}`)
			td_seven.innerText = k
			tr_seven.prepend(td_seven)

			const td_eight = document.createElement('td')
			td_eight.classList.add('td_eight')
			td_eight.classList.add(`td_eight_${k}`)
			td_eight.innerText = k
			tr_eight.prepend(td_eight)

			const td_nine = document.createElement('td')
			td_nine.classList.add('td_nine')
			td_nine.classList.add(`td_nine_${k}`)
			td_nine.innerText = k
			tr_nine.prepend(td_nine)
		}
	}
}

// 刻冒號
const colon_content = document.getElementById('colon_content')
for (let i = 1; i <= 2; i++) {
	const colon = document.createElement('table')
	colon.id = `colon_${i}`
	colon.classList.add(`colon`)
	colon.classList.add(`colon_${i}`)
	colon_content.prepend(colon)
	for (let j = 5; j >= 1; j--) {
		const tr_colon = document.createElement('tr')
		tr_colon.id = `tr_colon${j}`
		tr_colon.classList.add(`tr_colon`)
		tr_colon.classList.add(`tr_colon_${j}`)
		colon.prepend(tr_colon)
		for (let k = 1; k >= 1; k--) {
			const td_colon = document.createElement('td')
			td_colon.id = `td_colon_${k}`
			td_colon.classList.add(`td_colon`)
			td_colon.classList.add(`td_colon_${k}`)
			tr_colon.prepend(td_colon)
		}
	}
}

// 數字時鐘動起來
const ones_second_content = document.getElementById('ones_second_content')
const tens_second_content = document.getElementById('tens_second_content')
const ones_min_content = document.getElementById('ones_min_content')
const tens_min_content = document.getElementById('tens_min_content')
const ones_hour_content = document.getElementById('ones_hour_content')
const tens_hour_content = document.getElementById('tens_hour_content')
const time_number = {
	ones_sec: {
		0: zero[1],
		1: one[1],
		2: two[1],
		3: three[1],
		4: four[1],
		5: five[1],
		6: six[1],
		7: seven[1],
		8: eight[1],
		9: nine[1]
	},
	tens_sec: {
		0: zero[2],
		1: one[2],
		2: two[2],
		3: three[2],
		4: four[2],
		5: five[2],
		6: six[2],
		7: seven[2],
		8: eight[2],
		9: nine[2]
	},
	ones_min: {
		0: zero[3],
		1: one[3],
		2: two[3],
		3: three[3],
		4: four[3],
		5: five[3],
		6: six[3],
		7: seven[3],
		8: eight[3],
		9: nine[3]
	},
	tens_min: {
		0: zero[4],
		1: one[4],
		2: two[4],
		3: three[4],
		4: four[4],
		5: five[4],
		6: six[4],
		7: seven[4],
		8: eight[4],
		9: nine[4]
	},
	ones_hour: {
		0: zero[5],
		1: one[5],
		2: two[5],
		3: three[5],
		4: four[5],
		5: five[5],
		6: six[5],
		7: seven[5],
		8: eight[5],
		9: nine[5]
	},
	tens_hour: {
		0: zero[6],
		1: one[6],
		2: two[6],
		3: three[6],
		4: four[6],
		5: five[6],
		6: six[6],
		7: seven[6],
		8: eight[6],
		9: nine[6]
	}
}

for (let i = 0; i <= 9; i++) {
	ones_second_content.prepend(time_number.ones_sec[i])
	tens_second_content.prepend(time_number.tens_sec[i])
	ones_min_content.prepend(time_number.ones_min[i])
	tens_min_content.prepend(time_number.tens_min[i])
	ones_hour_content.prepend(time_number.ones_hour[i])
	tens_hour_content.prepend(time_number.tens_hour[i])
}

const time = () => {
	const date = new Date()
	const second = date.getSeconds()
	const time_ones_second = second % 10
	const time_tens_second = Math.floor(second / 10)

	const min = date.getMinutes()
	const time_ones_min = min % 10
	const time_tens_min = Math.floor(min / 10)

	const hour = date.getHours()
	const time_ones_hour = hour % 10
	const time_tens_hour = Math.floor(hour / 10)

	// 這邊都是 0 - 9 所以 one 可以給 tens 用
	for (let i in time_number.ones_sec) {
		time_number.ones_sec[i].style.display = 'none'
		time_number.tens_sec[i].style.display = 'none'
		time_number.ones_min[i].style.display = 'none'
		time_number.tens_min[i].style.display = 'none'
		time_number.ones_hour[i].style.display = 'none'
		time_number.tens_hour[i].style.display = 'none'
	}
	time_number.ones_sec[time_ones_second].style.display = 'block'
	time_number.tens_sec[time_tens_second].style.display = 'block'
	time_number.ones_min[time_ones_min].style.display = 'block'
	time_number.tens_min[time_tens_min].style.display = 'block'
	time_number.ones_hour[time_ones_hour].style.display = 'block'
	time_number.tens_hour[time_tens_hour].style.display = 'block'
}
setInterval(time, 1000)
time()

// 如果不是實際的 DOM 元素，後面 function 說不能逐秒更換，F5 會更換
// 所以改成改 display 樣式

// if (time_number.ones[time_ones_second]) {
// ones_second_content.prepend(time_number.ones[time_ones_second])
// }

// 數字的轉動
const number_rotate3d = [
	ones_second_content,
	tens_second_content,
	ones_min_content,
	tens_min_content,
	ones_hour_content,
	tens_hour_content
]

number_rotate3d.forEach((el, index) => {
	el.addEventListener('mouseover', () => {
		el.style.transform = 'rotate3d(0, 0, 1, 360deg)'
		el.style.transition = 'transform 1.5s'
	})

	el.addEventListener('mouseout', () => {
		el.style.transform = ''
		el.style.transition = ''
	})
})

// 背景格
const background_content = document.getElementById('background_content')
for (let i = 73; i >= 1; i--) {
	const tr_content = document.createElement('tr')
	tr_content.classList.add('tr_content')
	background_content.prepend(tr_content)
	for (let j = 150; j >= 1; j--) {
		const td_content = document.createElement('td')
		td_content.classList.add('td_content')
		tr_content.prepend(td_content)
	}
}

// 對照時鐘格子
// const table01 = document.getElementById('table01')

// for (let i = 30; i >= 1; i--) {
//   const tr01 = document.createElement('tr')
//   tr01.classList.add('tr01')
//   table01.prepend(tr01)
//   for (j = 0; j < 1; j++) {
//     const td01 = document.createElement('td')
//     td01.classList.add('td01')
//     td01.innerText = `${i}`
//     tr01.prepend(td01)
//   }
// }

// 對照馬力歐格子
// const table_m = document.getElementById('table_m')

// for (let i = 16; i >= 1; i--) {
//   const tr_m = document.createElement('tr')
//   table_m.prepend(tr_m)
//   for (let j = 1; j >= 1; j--) {
//     const td_m = document.createElement('td')
//     td_m.innerText = i
//     tr_m.prepend(td_m)
//   }
// }
