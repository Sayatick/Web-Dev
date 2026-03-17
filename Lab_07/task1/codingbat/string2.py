def double_char(s: str) -> str:
    return "".join(c * 2 for c in s)


def count_hi(s: str) -> int:
    return s.count("hi")


def cat_dog(s: str) -> bool:
    return s.count("cat") == s.count("dog")


def count_code(s: str) -> int:
    count = 0
    for i in range(len(s) - 3):
        if s[i : i + 2] == "co" and s[i + 3] == "e":
            count += 1
    return count


def end_other(a: str, b: str) -> bool:
    a_lower = a.lower()
    b_lower = b.lower()
    return a_lower.endswith(b_lower) or b_lower.endswith(a_lower)


def xyz_there(s: str) -> bool:
    for i in range(len(s) - 2):
        if s[i : i + 3] == "xyz":
            if i == 0 or s[i - 1] != ".":
                return True
    return False
