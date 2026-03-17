from models import Animal, Dog, Cat


def main():
    animal = Animal("Generic", 5, "gray")
    dog = Dog("Buddy", 3, "brown", "Labrador")
    cat = Cat("Misty", 2, "white", True)

    animals = [animal, dog, cat]

    for item in animals:
        print(item)
        print(item.eat())
        print(item.speak())
        print("-" * 40)

    print(dog.run())
    print(cat.climb())


if __name__ == "__main__":
    main()
