const unique = (values) => [...new Set(values.map((value) => value.trim()).filter(Boolean))];

const templates = {
  cinematic: {
    title: "Кинематографичный кадр",
    description:
      "Соберите атмосферную сцену с персонажем, местом, светом и операторскими приёмами в духе художественного кино.",
    fields: [
      {
        key: "start",
        label: "Старт",
        options: unique(["movie still,"]),
      },
      {
        key: "subject",
        label: "Объект (+ действие)",
        options: unique([
          "Harley Quinn",
          "fluffy cat",
          "Max Payne",
          "gopnik, black tracksuit",
          "french bulldog",
          "retrofuturistic robot",
          "ninja",
          "batman",
          "shrek",
          "spiderman",
          "Queen Elizabeth",
        ]),
      },
      {
        key: "location",
        label: "Локация",
        options: unique([
          "Russian village",
          "Kremlin roof",
          "old bar interior",
          "on table",
          "spaceship interior",
          "hyperspace",
          "forest",
          "Buckingham Palace",
        ]),
      },
      {
        key: "lighting",
        label: "Освещение",
        options: unique([
          "dramatic lighting",
          "low key",
          "high key",
          "bright",
          "dark",
          "rim light",
          "neon",
          "volumetric light",
          "cinematic lighting",
          "golden hour",
        ]),
      },
      {
        key: "camera",
        label: "Крупность / Камера",
        options: unique([
          "full body",
          "macro",
          "close up",
          "bird's-eye view",
          "view from above, high angle",
          "view from below, low angle",
          "view from behind",
          "top view",
          "POV",
          "wide shot",
        ]),
      },
      {
        key: "director",
        label: "Режиссёр",
        options: unique([
          "by Andrei Tarkovsky",
          "by Akira Kurosawa",
          "by Michael Bay",
          "by Steven Spielberg",
          "by Wes Anderson",
          "by Martin Scorsese",
          "by Terrence Malick",
          "by Pedro Almodovar",
          "by Lars von Trier",
          "by David Fincher",
        ]),
      },
      {
        key: "mood",
        label: "Настроение / Жанр",
        options: unique([
          "Action",
          "Happy",
          "Dramatic",
          "Calm",
          "Sad",
          "Horror",
          "Dreamy",
          "Sci-fi",
          "Fantasy",
          "Epic",
        ]),
      },
      {
        key: "year",
        label: "Год",
        options: unique([
          "2000 year",
          "1990s",
          "1980s",
          "1970s",
          "1960s",
          "1950s",
          "1940s",
          "1930s",
          "1920s",
          "ancient period",
          "2047 year",
          "2020 year",
        ]),
      },
      {
        key: "film",
        label: "Тип плёнки / камера",
        options: unique([
          "Fujifilm Superia",
          "GoPro",
          "Kodachrome",
          "Kodak Ektar",
          "vintage camera",
          "film",
        ]),
      },
      {
        key: "optics",
        label: "Оптика",
        options: unique([
          "f/4, 120mm",
          "f/1.8, 85mm",
          "f/4, 85mm",
          "f/8, 85mm",
          "f/4, 250mm",
          "f/4, 35mm",
        ]),
      },
      {
        key: "details",
        label: "Детали",
        options: unique([
          "8k",
          "muted colors",
          "Bokeh",
          "Sharp Focus",
          "Intricate details",
          "Amazing",
          "Bright colors",
        ]),
      },
    ],
  },
  logo: {
    title: "Логотип / фирменный стиль",
    description:
      "Помогает сформировать описание логотипа с нужными формами, цветами, текстурами и настроением.",
    fields: [
      {
        key: "start",
        label: "Старт",
        options: unique(["logotype,"]),
      },
      {
        key: "style",
        label: "Стиль",
        options: unique([
          "Minimalistic",
          "Abstract",
          "Geometric",
          "Organic",
          "Vintage",
          "Modern",
          "Futuristic",
          "Classic",
          "Retro",
          "Art Deco",
          "Industrial",
          "Hand-drawn",
          "Cartoonish",
          "Textured",
          "Flat",
          "Gradient",
          "Monoline",
        ]),
      },
      {
        key: "logoType",
        label: "Тип логотипа",
        options: unique([
          "Combination mark",
          "Emblem",
          "Symbol",
          "Wordmark",
          "Combination mark",
          "Mascot",
          "Lettermark",
          "Pictorial mark",
          "Abstract mark",
          "Coat of Arms",
          "Seal",
        ]),
      },
      {
        key: "color",
        label: "Цвет",
        options: unique([
          "Blue",
          "Black",
          "Red",
          "Green",
          "Yellow",
          "Orange",
          "Purple",
          "Multicolor",
          "Brown",
          "Pink",
          "Grey",
          "Gold",
          "Silver",
          "Bronze",
          "Teal",
          "Indigo",
          "Maroon",
        ]),
      },
      {
        key: "font",
        label: "Шрифт",
        options: unique([
          "Bold",
          "Serif",
          "Sans-serif",
          "Handwritten",
          "Decorative",
          "Monospaced",
          "Script",
          "Italic",
          "Condensed",
          "Extended",
          "Thin",
          "Heavy",
          "Regular",
          "Rounded",
          "Uppercase",
          "Lowercase",
          "Mixed Case",
        ]),
      },
      {
        key: "elements",
        label: "Элементы дизайна",
        options: unique([
          "Circles",
          "Lines",
          "Squares",
          "Triangles",
          "Organic shapes",
          "Geometric shapes",
          "Arrows",
          "Stars",
          "Dots",
          "Spirals",
          "Waves",
          "Zigzags",
          "Hearts",
          "Diamonds",
          "Hexagons",
          "Octagons",
          "Ovals",
          "Rectangles",
        ]),
      },
      {
        key: "symbolism",
        label: "Символика",
        options: unique([
          "Air",
          "Animals",
          "Plants",
          "Technology",
          "Nature",
          "Geometric shapes",
          "Human",
          "Mythology",
          "Space",
          "Water",
          "Fire",
          "Air",
          "Earth",
          "Music",
          "Art",
          "Sports",
          "Food",
          "Transportation",
        ]),
      },
      {
        key: "texture",
        label: "Текстура",
        options: unique([
          "Grassy texture",
          "Smooth texture",
          "Rough texture",
          "Textured texture",
          "Metallic texture",
          "Wooden texture",
          "Paper texture",
          "Fabric texture",
          "Stone texture",
          "Glass texture",
          "Plastic texture",
          "Leather texture",
          "Rubber texture",
          "Furry texture",
          "Glossy texture",
          "Matte texture",
          "Satin texture",
          "Silky texture",
        ]),
      },
      {
        key: "effects",
        label: "Эффекты",
        options: unique([
          "3D",
          "Shadow",
          "Gradient",
          "Neon",
          "Reflection",
          "Glowing",
          "Embossed",
          "Debossed",
          "Transparent",
          "Opaque",
          "Shiny",
          "Sparkling",
          "Glittering",
          "Fading",
          "Blurred",
          "Distorted",
          "Cracked",
        ]),
      },
      {
        key: "emotion",
        label: "Эмоция",
        options: unique([
          "Eco-friendly",
          "Friendly",
          "Professional",
          "Innovative",
          "Energetic",
          "Playful",
          "Serious",
          "Luxurious",
          "Casual",
          "Formal",
          "Dynamic",
          "Stable",
          "Trustworthy",
          "Welcoming",
          "Inviting",
          "Warm",
          "Cool",
        ]),
      },
      {
        key: "background",
        label: "Фон",
        options: unique([
          "on white surface",
          "on white background",
          "on poster",
          "on t-shirt",
          "on black background",
          "on colored background",
          "on gradient background",
          "on textured background",
          "on digital screen",
          "on billboard",
          "on business card",
          "on website",
          "on mobile app",
          "on stationery",
          "on brochure",
          "on banner",
          "on flyer",
        ]),
      },
      {
        key: "details",
        label: "Детали",
        options: unique([
          "8k",
          "muted colors",
          "Bokeh",
          "Sharp Focus",
          "Intricate details",
          "Amazing",
          "Bright colors",
        ]),
      },
    ],
  },
  studio: {
    title: "Студийная предметная съёмка",
    description:
      "Подходит для коммерческих кадров товаров, еды и аксессуаров со светом и фоном из студии.",
    fields: [
      {
        key: "start",
        label: "Старт",
        options: unique(["studio photo of"]),
      },
      {
        key: "subject",
        label: "Объект (+ действие)",
        options: unique([
          "a man",
          "a product",
          "a healthy food",
          "an electronics",
          "a fashion jacket",
          "a watches",
          "a jewelry",
          "a cosmetics",
          "a tools",
          "a toys",
          "a books",
          "a flowers",
          "a glass of beer",
          "a dog",
          "a cat",
        ]),
      },
      {
        key: "position",
        label: "Положение",
        options: unique([
          "Centered",
          "Left-aligned",
          "Right-aligned",
          "Top-aligned",
          "Bottom-aligned",
          "Off-center",
          "Diagonal",
          "Overlapping",
          "Layered",
          "Floating in the air",
          "on the table",
        ]),
      },
      {
        key: "material",
        label: "Материал",
        options: unique([
          "realistic",
          "made from Plastic",
          "made from Metal",
          "made from Glass",
          "made from Wood",
          "made from Fabric",
          "made from Paper",
          "made from Leather",
          "made from Rubber",
          "made from Ceramic",
          "made from Stone",
        ]),
      },
      {
        key: "lighting",
        label: "Освещение",
        options: unique([
          "cinematic lighting",
          "dramatic lighting",
          "low key",
          "high key",
          "bright",
          "dark",
          "rim light",
          "neon",
          "volumetric light",
          "golden hour",
        ]),
      },
      {
        key: "camera",
        label: "Крупность / Камера",
        options: unique([
          "close up",
          "macro",
          "full body",
          "bird's-eye view",
          "view from above",
          "view from below, low angle",
          "view from behind",
          "top view",
          "POV",
          "wide shot",
          "high angle",
        ]),
      },
      {
        key: "background",
        label: "Фон",
        options: unique([
          "on white surface",
          "white background",
          "Minimalistic backdrop",
          "Detailed backdrop",
        ]),
      },
      {
        key: "style",
        label: "Стиль",
        options: unique([
          "Detailed",
          "Realistic",
          "Minimalistic",
          "Vintage",
          "Modern",
          "Futuristic",
          "Artistic",
          "Cartoonish",
          "Photorealistic",
          "High contrast",
          "Saturated",
          "Monochromatic",
          "Pastel",
          "Dark",
          "Light",
          "Vibrant",
          "Muted",
          "Colorful",
        ]),
      },
      {
        key: "details",
        label: "Детали",
        options: unique([
          "8k",
          "muted colors",
          "Bokeh",
          "Sharp Focus",
          "Intricate details",
          "Amazing",
          "Bright colors",
        ]),
      },
    ],
  },
};

const state = {
  templateKey: "cinematic",
  values: {},
  extra: "",
};

const templateSelector = document.getElementById("templateSelector");
const templateTitle = document.getElementById("templateTitle");
const templateDescription = document.getElementById("templateDescription");
const fieldsContainer = document.getElementById("fieldsContainer");
const extraInput = document.getElementById("extraInput");
const promptOutput = document.getElementById("promptOutput");
const piecesList = document.getElementById("piecesList");
const symbolsCounter = document.getElementById("symbolsCounter");
const copyToast = document.querySelector(".copy-toast");
const copyButton = document.getElementById("copyButton");
const randomButton = document.getElementById("randomButton");
const clearButton = document.getElementById("clearButton");

const OPTION_CUSTOM_VALUE = "__custom__";

const init = () => {
  Object.entries(templates).forEach(([key, template]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = template.title;
    templateSelector.append(option);
  });

  templateSelector.value = state.templateKey;
  renderTemplate(state.templateKey);

  templateSelector.addEventListener("change", (event) => {
    setTemplate(event.target.value);
  });

  extraInput.addEventListener("input", (event) => {
    state.extra = event.target.value.trim();
    updatePrompt();
  });

  copyButton.addEventListener("click", handleCopy);
  randomButton.addEventListener("click", fillRandomValues);
  clearButton.addEventListener("click", clearAll);
};

const setTemplate = (key) => {
  state.templateKey = key;
  state.values = {};
  state.extra = "";
  extraInput.value = "";
  renderTemplate(key);
  updatePrompt();
};

const renderTemplate = (key) => {
  const template = templates[key];
  templateTitle.textContent = template.title;
  templateDescription.textContent = template.description;

  fieldsContainer.innerHTML = "";
  template.fields.forEach((field) => {
    const fieldElement = createField(field);
    fieldsContainer.appendChild(fieldElement);
  });
};

const createField = (field) => {
  const wrapper = document.createElement("div");
  wrapper.className = "field";

  const label = document.createElement("label");
  label.htmlFor = `${field.key}Select`;
  label.textContent = field.label;

  const select = document.createElement("select");
  select.id = `${field.key}Select`;
  select.dataset.key = field.key;

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "— выберите —";
  select.append(placeholder);

  field.options.forEach((optionValue) => {
    const option = document.createElement("option");
    option.value = optionValue;
    option.textContent = optionValue;
    select.append(option);
  });

  const customOption = document.createElement("option");
  customOption.value = OPTION_CUSTOM_VALUE;
  customOption.textContent = "Свой вариант…";
  select.append(customOption);

  const customInput = document.createElement("input");
  customInput.type = "text";
  customInput.dataset.key = field.key;
  customInput.placeholder = "Введите свой вариант";
  customInput.className = "custom-input";

  select.addEventListener("change", () => {
    const { value } = select;
    if (value === OPTION_CUSTOM_VALUE) {
      customInput.classList.add("is-visible");
      customInput.focus();
      updateValue(field.key, customInput.value.trim());
    } else {
      customInput.classList.remove("is-visible");
      customInput.value = "";
      updateValue(field.key, value.trim());
    }
  });

  customInput.addEventListener("input", (event) => {
    updateValue(field.key, event.target.value.trim());
  });

  wrapper.append(label, select, customInput);
  return wrapper;
};

const updateValue = (key, value) => {
  if (value) {
    state.values[key] = value;
  } else {
    delete state.values[key];
  }
  updatePrompt();
};

const buildParts = () => {
  const template = templates[state.templateKey];
  const parts = template.fields
    .map((field) => state.values[field.key])
    .filter(Boolean);

  if (state.extra) {
    parts.push(state.extra);
  }

  return parts;
};

const updatePrompt = () => {
  const parts = buildParts();
  const prompt = parts.join(" ");
  promptOutput.value = prompt;
  symbolsCounter.textContent = `${prompt.length} символов`;
  renderPieces(parts);
};

const renderPieces = (parts) => {
  piecesList.innerHTML = "";
  if (!parts.length) {
    return;
  }

  parts.forEach((part) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = part;
    piecesList.appendChild(chip);
  });
};

const handleCopy = async () => {
  const text = promptOutput.value.trim();
  if (!text) {
    showToast("Нет текста для копирования");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    showToast("Промт скопирован!");
  } catch (error) {
    promptOutput.focus();
    promptOutput.select();
    const successful = document.execCommand("copy");
    showToast(successful ? "Промт скопирован!" : "Не удалось скопировать");
  }
};

const showToast = (message) => {
  copyToast.textContent = message;
  copyToast.classList.add("is-visible");
  setTimeout(() => {
    copyToast.classList.remove("is-visible");
  }, 2000);
};

const getFieldControls = () => {
  return Array.from(fieldsContainer.querySelectorAll("select"));
};

const fillRandomValues = () => {
  const template = templates[state.templateKey];
  const selects = getFieldControls();

  selects.forEach((select) => {
    const key = select.dataset.key;
    const field = template.fields.find((item) => item.key === key);
    if (!field || !field.options.length) {
      select.value = "";
      updateValue(key, "");
      return;
    }

    const randomOption = field.options[Math.floor(Math.random() * field.options.length)];
    select.value = randomOption;

    const customInput = fieldsContainer.querySelector(
      `input.custom-input[data-key="${key}"]`
    );
    if (customInput) {
      customInput.classList.remove("is-visible");
      customInput.value = "";
    }

    updateValue(key, randomOption);
  });

  state.extra = "";
  extraInput.value = "";
  updatePrompt();
};

const clearAll = () => {
  getFieldControls().forEach((select) => {
    select.value = "";
  });
  fieldsContainer
    .querySelectorAll("input.custom-input")
    .forEach((input) => {
      input.value = "";
      input.classList.remove("is-visible");
    });
  state.values = {};
  state.extra = "";
  extraInput.value = "";
  updatePrompt();
};

init();
