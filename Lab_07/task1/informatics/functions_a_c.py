def min2(a: int, b: int) -> int:
    return a if a < b else b


def problem_a():
    a, b = map(int, input().split())
    print(min2(a, b))


def min3(a: int, b: int, c: int) -> int:
    return min(a, min(b, c))


def problem_b():
    a, b, c = map(int, input().split())
    print(min3(a, b, c))


def power(a: float, n: int) -> float:
    return a**n


def problem_c():
    a = float(input())
    n = int(input())
    print(power(a, n))


if __name__ == "__main__":
    problem_a()
