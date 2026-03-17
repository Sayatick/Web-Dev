def hello_name(name: str) -> str:
    return f"Hello {name}!"


def make_abba(a: str, b: str) -> str:
    return a + b + b + a


def make_tags(tag: str, word: str) -> str:
    return f"<{tag}>{word}</{tag}>"


def make_out_word(out: str, word: str) -> str:
    return out[:2] + word + out[2:]


def extra_end(s: str) -> str:
    last2 = s[-2:] if len(s) >= 2 else s
    return last2 * 3


def first_two(s: str) -> str:
    return s[:2]


def first_half(s: str) -> str:
    return s[: len(s) // 2]


def without_end(s: str) -> str:
    return s[1:-1] if len(s) >= 2 else ""


def combo_string(a: str, b: str) -> str:
    if len(a) < len(b):
        return a + b + a
    return b + a + b


def non_start(a: str, b: str) -> str:
    return a[1:] + b[1:]


def left2(s: str) -> str:
    return s[2:] + s[:2] if len(s) >= 2 else s
