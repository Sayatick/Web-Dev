def problem_a():
    a = int(input())
    b = int(input())
    print(min(a, b))


def problem_b():
    a = int(input())
    b = int(input())
    print(max(a, b))


def problem_c():
    n = int(input())
    if n > 0:
        print(1)
    elif n < 0:
        print(-1)
    else:
        print(0)


def problem_d():
    x = int(input())
    y = int(input())
    if x > 0 and y > 0:
        print(1)
    elif x < 0 and y > 0:
        print(2)
    elif x < 0 and y < 0:
        print(3)
    else:
        print(4)


def problem_e():
    year = int(input())
    if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
        print("YES")
    else:
        print("NO")


if __name__ == "__main__":
    problem_a()
