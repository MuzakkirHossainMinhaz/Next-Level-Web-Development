{
  // generic interface

  interface Developer<T, X> {
    // default parameter Developer<T, X = null>
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type SamsungWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<SamsungWatch, null> = {
    name: "Muzakkir",
    computer: {
      brand: "Dell",
      model: "XPS",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Samsung",
      model: "Galaxy",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    features: string[];
  }
  interface SuzukiBike {
    brand: string;
    model: string;
    engine: number;
  }

  const richDeveloper: Developer<AppleWatch, SuzukiBike> = {
    name: "Muzakkir",
    computer: {
      brand: "Apple",
      model: "Mac",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "Series 6",
      features: ["Water resistance", "Waterproof"],
    },
    bike: {
      brand: "Suzuki",
      model: "Swift",
      engine: 1500,
    },
  };
}
