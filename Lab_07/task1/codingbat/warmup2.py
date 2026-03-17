def string_times(s: str, n: int) -> str:
    return s * n


def front_times(s: str, n: int) -> str:
    front = s[:3] if len(s) >= 3 else s
    return front * n


def string_bits(s: str) -> str:
    return s[::2]


def string_splosion(s: str) -> str:
    result = ""
    for i in range(len(s) + 1):
        result += s[:i]
    return result


def last2(s: str) -> int:
    if len(s) < 2:
        return 0
    last2_chars = s[-2:]
    count = 0
    for i in range(len(s) - 2):
        if s[i : i + 2] == last2_chars:
            count += 1
    return count


def array_count9(nums: list[int]) -> int:
    return nums.count(9)


def array_front9(nums: list[int]) -> bool:
    end = min(4, len(nums))
    return 9 in nums[:end]


def array123(nums: list[int]) -> bool:
    for i in range(len(nums) - 2):
        if nums[i] == 1 and nums[i + 1] == 2 and nums[i + 2] == 3:
            return True
    return False


def string_match(a: str, b: str) -> int:
    count = 0
    for i in range(min(len(a), len(b)) - 1):
        if a[i : i + 2] == b[i : i + 2]:
            count += 1
    return count
