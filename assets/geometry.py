from manim import *
config.media_width = "100%"

class MyScene(Scene):
    def construct(self):
        circle = Circle(radius=2.0, color=BLUE)
        square = Square(side_length=2.0, color=RED)
        triangle = Polygon(np.array([-1, 0, 0]), np.array([1, 0, 0]), np.array([0, 2, 0]), color=GREEN)

        circle.set_fill(BLUE, opacity=0.5)
        square.set_fill(RED, opacity=0.5)
        triangle.set_fill(GREEN, opacity=0.5)

        circle.move_to(ORIGIN)
        square.move_to(ORIGIN)
        triangle.move_to(ORIGIN)

        self.play(Create(circle), Create(square), Create(triangle))

        self.play(
            square.animate.shift(1.5*UP + 1.5*RIGHT),
            triangle.animate.shift(1.5*RIGHT),
        )

        self.wait(7)
        self.play(FadeOut(circle), FadeOut(square), FadeOut(triangle))

class MyTriangle_abc_line(Scene):
    def construct(self):
        vertices = np.array([[-5, -3, 0], [5, -1, 0], [0, 3, 0]])

        triangle = Polygon(*vertices, color=GREEN)

        label_A = MathTex(r"A").next_to(vertices[0], DOWN)
        label_B = MathTex(r"B").next_to(vertices[1], RIGHT)
        label_C = MathTex(r"C").next_to(vertices[2], UP)
        
        mid_AB = (vertices[0] + vertices[1]) / 2
        mid_BC = (vertices[1] + vertices[2]) / 2
        mid_CA = (vertices[2] + vertices[0]) / 2

        label_a = MathTex(r"a").next_to(mid_BC, direction=UP, buff=0.25)
        label_b = MathTex(r"b").next_to(mid_CA, direction=LEFT, buff=0.25)
        label_c = MathTex(r"c").next_to(mid_AB, direction=DOWN, buff=0.25)

        self.play(Create(triangle), Write(label_A), Write(label_B), Write(label_C), Write(label_a), Write(label_b), Write(label_c))
        self.wait(30)
        self.play(FadeOut(triangle), FadeOut(label_A), FadeOut(label_B), FadeOut(label_C), FadeOut(label_a), FadeOut(label_b), FadeOut(label_c))

class MyTriangle_abc(Scene):
    def construct(self):
        vertices = np.array([[-5, -3, 0], [5, -1, 0], [0, 3, 0]])

        triangle = Polygon(*vertices, color=GREEN)
        triangle.set_fill(GREEN, opacity=0.5)

        label_A = MathTex(r"A").next_to(vertices[0], DOWN)
        label_B = MathTex(r"B").next_to(vertices[1], RIGHT)
        label_C = MathTex(r"C").next_to(vertices[2], UP)
        
        mid_AB = (vertices[0] + vertices[1]) / 2
        mid_BC = (vertices[1] + vertices[2]) / 2
        mid_CA = (vertices[2] + vertices[0]) / 2

        label_a = MathTex(r"a").next_to(mid_BC, direction=UP, buff=0.25)
        label_b = MathTex(r"b").next_to(mid_CA, direction=LEFT, buff=0.25)
        label_c = MathTex(r"c").next_to(mid_AB, direction=DOWN, buff=0.25)

        self.play(Create(triangle), Write(label_A), Write(label_B), Write(label_C), Write(label_a), Write(label_b), Write(label_c))
        self.wait(30)
        self.play(FadeOut(triangle), FadeOut(label_A), FadeOut(label_B), FadeOut(label_C), FadeOut(label_a), FadeOut(label_b), FadeOut(label_c))
        
class MyTriangle_bh(Scene):
    def construct(self):
        vertices = np.array([[-5, -3, 0], [6, -3, 0], [-2, 3, 0]])

        triangle = Polygon(*vertices, color=GREEN)
        triangle.set_fill(GREEN, opacity=0.5)

        height_point = np.array([vertices[2][0], vertices[1][1], 0])
        mid_height = (vertices[2] + height_point) / 2
        mid_base = (vertices[0] + vertices[1]) / 2

        height_line = Line(vertices[2], height_point, color=GREEN)

        right_angle = RightAngle(height_line, Line(vertices[0], vertices[1]), length=0.2, stroke_width=2.5, quadrant=(-1,1))

        label_A = MathTex(r"A").next_to(vertices[0], DOWN)
        label_B = MathTex(r"B").next_to(vertices[1], DOWN)
        label_C = MathTex(r"C").next_to(vertices[2], UP)
        label_h = MathTex(r"h").next_to(mid_height, LEFT, buff=0.1)
        label_b = MathTex(r"b").next_to(mid_base, DOWN, buff=0.1)

        self.play(Create(triangle), Write(label_A), Write(label_B), Write(label_C), Create(height_line), Write(label_h), Write(label_b), Create(right_angle))
        self.wait(30)
        self.play(FadeOut(triangle), FadeOut(label_A), FadeOut(label_B), FadeOut(label_C), FadeOut(height_line), FadeOut(label_h), FadeOut(label_b), Create(right_angle))