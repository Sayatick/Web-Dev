def problem_a():
    total = 0
    while True:
        n = int(input())
        if n == 0:
            break
        total += n
    print(total)


def problem_b():
    n = int(input())
    count = 0
    if n == 0:
        count = 1
    else:
        n = abs(n)
        while n > 0:
            count += 1
            n //= 10
    print(count)


def problem_c():
    max_val = None
    while True:
        n = int(input())
        if n == 0:
            break
        if max_val is None or n > max_val:
            max_val = n
    print(max_val if max_val is not None else 0)


def problem_d():
    count = 0
    while True:
        n = int(input())
        if n == 0:
            break
        if n > 0:
            count += 1
    print(count)


def problem_e():
    first_max = None
    second_max = None
    while True:
        n = int(input())
        if n == 0:
            break
        if first_max is None or n > first_max:
            second_max = first_max
            first_max = n
        elif second_max is None or (n > second_max and n != first_max):
            second_max = n
    print(second_max if second_max is not None else 0)


if __name__ == "__main__":
    problem_a()
