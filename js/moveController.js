angular.module('tictacApp')
	.controller('MoveController', MoveController);

function MoveController(){


	this.board = [
	[{value: '-'}, {value: '-'}, {value: '-'}],
	[{value: '-'}, {value: '-'}, {value: '-'}],
	[{value: '-'}, {value: '-'}, {value: '-'}]
	];

	this.move = function(cell) {
    cell.value = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  };

   var checkForEndOfGame = function() {
    return this.winner || this.cat;
  };

  var checkForMatch = function(cell1, cell2, cell3) {
    return cell1.value === cell2.value && 
           cell1.value === cell3.value &&
           cell1.value !== '-';
  };

}