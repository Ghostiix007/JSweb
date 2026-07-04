$(function () {
    const $canvas = $('#canvas');
    const rows = 20, cols = 30;
    // create grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            $canvas.append('<div class="cell"></div>');
        }
    }

    let isDrawing = false;
    let randomMode = false;
    const defaultColor = '#000000';

    function getColor() {
        return randomMode ? randomColor() : defaultColor;
    }

    function randomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    }

    function paintCell($cell) {
        $cell.css('background-color', getColor());
    }

    // mouse events
    $canvas.on('mousedown', '.cell', function (e) {
        e.preventDefault(); // prevent text selection
        isDrawing = true;
        paintCell($(this));
        return false;
    });

    $canvas.on('mouseover', '.cell', function () {
        if (isDrawing) {
            paintCell($(this));
        }
    });

    $(document).on('mouseup', function () {
        isDrawing = false;
    });

    // optional: stop drawing when leaving canvas
    $canvas.on('mouseleave', function () {
        isDrawing = false;
    });

    // clear button
    $('#clearBtn').on('click', function () {
        $('.cell').css('background-color', 'white');
    });

    // random mode toggle
    $('#randMode').on('change', function () {
        randomMode = this.checked;
    });
});