type ParticleConstructor = {
  canvas: any;
};

type TBAll = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  phase: number;
  type?: string;
};

export default class Particles {
  canvas: any;
  context: any;
  can_w: number = 0;
  can_h: number = 0;

  ball_num: number = 0;
  balls: TBAll[] = [];
  R = 2;

  link_line_width = 0.8;
  dis_limit = 260;

  alpha_f = 0.03;

  mouse_in = false;
  mouse_ball: TBAll = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    r: 0,
    alpha: 1,
    phase: 0,
    type: "mouse",
  };

  constructor({ canvas }: ParticleConstructor) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.balls.push(this.mouse_ball);
  }

  initCanvas() {
    this.context.canvas.width = this.canvas.getBoundingClientRect().width;
    this.context.canvas.height = this.canvas.getBoundingClientRect().height;
    this.can_w = parseInt(this.context.canvas.width);
    this.can_h = parseInt(this.context.canvas.height);
    const screen_size = this.can_h * this.can_w;
    const density_size = 150 * 100;
    this.ball_num = Math.floor(screen_size / density_size);
  }

  goMovie() {
    this.initCanvas();
    this.initBalls(this.ball_num);
    window.requestAnimationFrame(this.render.bind(this));
  }

  renderBalls() {
    for (const ball of this.balls) {
      const ball_color = {
        r: 207,
        g: 255,
        b: 4,
      };
      this.context.fillStyle = `rgba(${ball_color.r}, ${ball_color.g}, ${ball_color.b}, 1)`;
      this.context.beginPath();
      this.context.arc(ball.x, ball.y, this.R, 0, Math.PI * 2, true);
      this.context.closePath();
      this.context.fill();
    }
  }

  renderLines() {
    var fraction, alpha;
    for (var i = 0; i < this.balls.length; i++) {
      for (var j = i + 1; j < this.balls.length; j++) {
        fraction = this.getDisOf(this.balls[i], this.balls[j]) / this.dis_limit;

        if (fraction < 1) {
          alpha = (1 - fraction).toString();

          this.context.strokeStyle = "rgba(150,150,150," + alpha + ")";
          this.context.lineWidth = this.link_line_width;

          this.context.beginPath();
          this.context.moveTo(this.balls[i].x, this.balls[i].y);
          this.context.lineTo(this.balls[j].x, this.balls[j].y);
          this.context.stroke();
          this.context.closePath();
        }
      }
    }
  }

  getDisOf(b1: TBAll, b2: TBAll) {
    var delta_x = Math.abs(b1.x - b2.x),
      delta_y = Math.abs(b1.y - b2.y);

    return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
  }

  render() {
    this.context.clearRect(0, 0, this.can_w, this.can_h);
    this.renderBalls();
    this.renderLines();
    this.updateBalls();
    this.addBallIfy();
    window.requestAnimationFrame(this.render.bind(this));
  }

  initBalls(num: number) {
    for (var i = 1; i <= num; i++) {
      this.balls.push({
        x: this.randomSidePos(this.can_w),
        y: this.randomSidePos(this.can_h),
        vx: this.getRandomSpeed("top")[0],
        vy: this.getRandomSpeed("top")[1],
        r: this.R,
        alpha: 1,
        phase: this.randomNumFrom(0, 10),
      });
    }
  }

  addBallIfy() {
    if (this.balls.length < this.ball_num) {
      this.balls.push(this.getRandomBall());
    }
  }

  updateBalls() {
    var new_balls = [];
    for (const b of this.balls) {
      b.x += b.vx;
      b.y += b.vy;

      if (
        (b.x > -50 &&
          b.x < this.can_w + 50 &&
          b.y > -50 &&
          b.y < this.can_h + 50) ||
        b.type == "mouse"
      ) {
        new_balls.push(b);
      }

      // alpha change
      b.phase += this.alpha_f;
      b.alpha = Math.abs(Math.cos(b.phase));
    }

    this.balls = new_balls.slice(0);
  }

  getRandomBall(): TBAll {
    var pos = this.randomArrayItem(["top", "right", "bottom", "left"]);
    switch (pos) {
      case "top":
        return {
          x: this.randomSidePos(this.can_w),
          y: -this.R,
          vx: this.getRandomSpeed("top")[0],
          vy: this.getRandomSpeed("top")[1],
          r: this.R,
          alpha: 1,
          phase: this.randomNumFrom(0, 10),
        };
      case "right":
        return {
          x: this.can_w + this.R,
          y: this.randomSidePos(this.can_h),
          vx: this.getRandomSpeed("right")[0],
          vy: this.getRandomSpeed("right")[1],
          r: this.R,
          alpha: 1,
          phase: this.randomNumFrom(0, 10),
        };
      case "bottom":
        return {
          x: this.randomSidePos(this.can_w),
          y: this.can_h + this.R,
          vx: this.getRandomSpeed("bottom")[0],
          vy: this.getRandomSpeed("bottom")[1],
          r: this.R,
          alpha: 1,
          phase: this.randomNumFrom(0, 10),
        };
      case "left":
        return {
          x: -this.R,
          y: this.randomSidePos(this.can_h),
          vx: this.getRandomSpeed("left")[0],
          vy: this.getRandomSpeed("left")[1],
          r: this.R,
          alpha: 1,
          phase: this.randomNumFrom(0, 10),
        };
      default:
        return {
          x: -this.R,
          y: this.randomSidePos(this.can_h),
          vx: this.getRandomSpeed("left")[0],
          vy: this.getRandomSpeed("left")[1],
          r: this.R,
          alpha: 1,
          phase: this.randomNumFrom(0, 10),
        };
    }
  }

  randomSidePos(length: number) {
    return Math.ceil(Math.random() * length);
  }

  randomNumFrom(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  randomArrayItem(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  getRandomSpeed(pos: string) {
    const min = -1;
    const max = 1;
    switch (pos) {
      case "top":
        return [this.randomNumFrom(min, max), this.randomNumFrom(0.1, max)];
      case "right":
        return [this.randomNumFrom(min, -0.1), this.randomNumFrom(min, max)];
      case "bottom":
        return [this.randomNumFrom(min, max), this.randomNumFrom(min, -0.1)];
      case "left":
        return [this.randomNumFrom(0.1, max), this.randomNumFrom(min, max)];
      default:
        return [this.randomNumFrom(min, max), this.randomNumFrom(0.1, max)];
    }
  }
}
