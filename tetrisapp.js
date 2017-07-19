var invalid = {};

function invalidate()         { invalid.court  = true; }
function invalidateNext()     { invalid.next   = true; }
function invalidateScore()    { invalid.score  = true; }
function invalidateRows()     { invalid.rows   = true; }

function draw() {
  ctx.save();
  ctx.lineWidth = 1;
  ctx.translate(0.5, 0.5); // for crisp 1px black lines
  drawCourt();
  drawNext();
  drawScore();
  drawRows();
  ctx.restore();
};

function drawCourt() {
  if (invalid.court) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (playing)
      drawPiece(ctx, current.type, current.x, current.y, current.dir);
    var x, y, block;
    for(y = 0 ; y < ny ; y++) {
      for (x = 0 ; x < nx ; x++) {
        if (block = getBlock(x,y))
          drawBlock(ctx, x, y, block.color);
      }
    }
    ctx.strokeRect(0, 0, nx*dx - 1, ny*dy - 1); // court boundary
    invalid.court = false;
  }
};

function drawNext() {
  if (invalid.next) {
    var padding = (nu - next.type.size) / 2; // half-arsed attempt at centering next piece display
    uctx.save();
    uctx.translate(0.5, 0.5);
    uctx.clearRect(0, 0, nu*dx, nu*dy);
    drawPiece(uctx, next.type, padding, padding, next.dir);
    uctx.strokeStyle = 'black';
    uctx.strokeRect(0, 0, nu*dx - 1, nu*dy - 1);
    uctx.restore();
    invalid.next = false;
  }
};

function drawScore() {
  if (invalid.score) {
    html('score', ("00000" + Math.floor(score)).slice(-5));
    invalid.score = false;
  }
};

function drawRows() {
  if (invalid.rows) {
    html('rows', rows);
    invalid.rows = false;
  }
};

function drawPiece(ctx, type, x, y, dir) {
  eachblock(type, x, y, dir, function(x, y) {
    drawBlock(ctx, x, y, type.color);
  });
};

function drawBlock(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x*dx, y*dy, dx, dy);
  ctx.strokeRect(x*dx, y*dy, dx, dy)
};