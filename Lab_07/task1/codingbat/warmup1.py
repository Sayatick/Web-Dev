def sleep_in(weekday: bool, vacation: bool) -> bool:
    return not weekday or vacation


def monkey_trouble(a_smile: bool, b_smile: bool) -> bool:
    return a_smile == b_smile


def sum_double(a: int, b: int) -> int:
    return a + b if a != b else 2 * (a + b)


def diff21(n: int) -> int:
    diff = abs(n - 21)
    return 2 * diff if n > 21 else diff


def parrot_trouble(talking: bool, hour: int) -> bool:
    return talking and (hour < 7 or hour > 20)


def makes10(a: int, b: int) -> bool:
    return a == 10 or b == 10 or a + b == 10


def near_hundred(n: int) -> bool:
    return abs(n - 100) <= 10 or abs(n - 200) <= 10


def pos_neg(a: int, b: int, negative: bool) -> bool:
    if negative:
        return a < 0 and b < 0
    return (a < 0) != (b < 0)


def not_string(s: str) -> str:
    return s if s.startswith("not ") else "not " + s


def missing_char(s: str, n: int) -> str:
    return s[:n] + s[n + 1 :]


def front_back(s: str) -> str:
    if len(s) <= 1:
        return s
    return s[-1] + s[1:-1] + s[0]


def front3(s: str) -> str:
    front = s[:3] if len(s) >= 3 else s
    return front * 3
