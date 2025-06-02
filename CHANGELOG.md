# Changelog


## v0.1.1

[compare changes](https://github.com/Readpato/dashboard-zoo-cologne-challenge/compare/v0.1.0...v0.1.1)

### 🚀 Enhancements

- **components/TheAnimalTable:** Implement TanStack Table ([53229cb](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/53229cb))
- **components/Table:** Add shadcn table component ([5cb51c0](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/5cb51c0))
- **components/base:** Create BaseIcon and BaseTableHeaderIcon components ([8a909fb](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/8a909fb))
- **components/app:** Create header component ([990aec3](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/990aec3))
- **pages:** Create main view and animal with dynamic routing ([13319d1](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/13319d1))
- **components/base:** Create BaseTableActions component ([2d3791f](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/2d3791f))
- **server/animals:** Implement new server route group ([8e65d8e](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/8e65d8e))
- **pages/animals/[id]:** Implement card, display all animal details ([a82c162](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/a82c162))
- **data/constants:** Create constant file ([091378b](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/091378b))

### 🩹 Fixes

- **components/TheAnimalTable:** Properly name column ([4f12549](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/4f12549))

### 💅 Refactors

- **utils/calculateAgeInYears:** Adjust function to return a minimum of one for the age ([b9d9c43](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/b9d9c43))
- **utils/calculateAgeInYears:** Add TSDoc comments for util ([aeb2366](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/aeb2366))
- **components/TheAnimalTable:** Add name column, change sorting, provide age in years ([b2fcf0b](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/b2fcf0b))
- **components/TheAnimalTable:** Utilize prop destructuring, implement sort with localeCompare, calculate age in script ([d5c363b](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/d5c363b))
- **types:** Update animal type, sort alphabetically ([fd60a97](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/fd60a97))
- **components/TheAnimalTable:** Utilize uuid as key ([68a9eca](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/68a9eca))
- **TheAnimalTable:** Implement base component for header ([8d9534c](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/8d9534c))
- **app.vue:** Clean up component ([8d765c7](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/8d765c7))
- **app.vue:** Implement NuxtPage component, clean up unnecesary ones ([926b588](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/926b588))
- **TheAnimalTable:** Implement BaseTableAction component ([1cae632](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/1cae632))
- **pages:** Implement useAnimal composable fetches ([9d8127e](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/9d8127e))
- **data/fakeData:** Make fake data our only source of truth ([51cba1c](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/51cba1c))
- **composables/useAnimals:** Implement new fetch, make ref singletons ([4bd6b0e](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/4bd6b0e))
- **components/TheAnimalTable:** Utilize constants whenever possible ([d162896](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/d162896))

### 🏡 Chore

- **TASKS.md/03:** Add package usage for changelogen ([f1735dd](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/f1735dd))
- Delete unnecesary comment ([a90a5d6](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/a90a5d6))
- **TASKS.md/04:** Add initial notations for task ([051e27c](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/051e27c))
- **TASKS.md/04:** Extend task with comments ([f913a07](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/f913a07))
- **TASKS.md/05:** Write down first comments for task ([ac401af](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/ac401af))
- **TASKS.md/05:** Add super important image ([0e74007](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/0e74007))
- **TASKS.md/05:** Add refactoring notes ([796ac10](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/796ac10))
- **TASKS.md/05:** Add refactoring notes ([2556e99](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/2556e99))
- **fakeData:** Implement uuid to animal ([4b656b5](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/4b656b5))
- Remove unecessary import ([b29d482](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/b29d482))
- **eslint.config:** Implement max attributes per line rule ([f0d82d4](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/f0d82d4))
- **TASKS.md/05:** Add refactoring notes ([819f7a2](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/819f7a2))
- **README:** Add TanStack table to Tech Stack ([9444f59](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/9444f59))
- Lint fix ([07bb259](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/07bb259))
- Delete unnecesary folder ([8074303](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/8074303))
- **TASKS.md/05:** Add refactoring notes ([d63274e](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/d63274e))
- **README.md:** Update tech stack ([eed1eca](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/eed1eca))
- **nuxt.config:** Implement icon and compatibility date ([396ac8d](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/396ac8d))
- **TASKS.md/06:** Add initial notes for task 06 ([3c61ee2](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/3c61ee2))
- **TASKS.md/06:** Add further notes for task 06 ([8e484ce](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/8e484ce))
- **components/ui:** Add button and tooltip provider ([b8219b2](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/b8219b2))
- **TASKS.md/06:** Add further notes for task 06 ([128baac](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/128baac))
- **components/ui:** Add card component ([d091576](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/d091576))
- **eslint.config:** Ignore md files ([433432a](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/433432a))
- **TASKS.md/06:** Add final notes ([a9843ef](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/a9843ef))

### ❤️ Contributors

- Patrick Raedler ([@Readpato](https://github.com/Readpato))

## v0.1.0


### 🩹 Fixes

- **App.vue:** Remove undeclared function from file ([a389770](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/a389770))
- **server/animals.get:** Remove typo, utilize proper constant ([18528a6](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/18528a6))

### 💅 Refactors

- **utils/useCalculateAgeInYears:** Rename composable into util ([6025736](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/6025736))

### 🏡 Chore

- **TASKS.md:** Add comment to paragraph ([de56c8a](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/de56c8a))
- **TASKS.md/01:** Update first task with annotations ([337f526](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/337f526))
- **TASKS.md/01:** Update task with final annotation ([50234d2](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/50234d2))
- **TASKS.md/02:** Update task with first annotation ([84c22bf](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/84c22bf))
- **TASKS.md/02:** Update task second annotation ([8bedc77](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/8bedc77))
- Add .zed folder to gitignore ([3fed141](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/3fed141))
- **package.json:** Add simple git hooks and lint staged ([71bf1fc](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/71bf1fc))
- **.config:** Update config files accordingly ([81ebb1b](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/81ebb1b))
- Restructure codebase ([e3c8435](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/e3c8435))
- Lint ([da793e8](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/da793e8))
- **README:** Update readme with up to date codebase structure ([af775aa](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/af775aa))
- **TASKS.md/03:** Addres task number 3 ([fa06a90](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/fa06a90))
- **vitest.config:** Add vitest basic config ([fcaf5b0](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/fcaf5b0))
- **nuxt.config:** Add nuxt test utils as module ([cd3764f](https://github.com/Readpato/dashboard-zoo-cologne-challenge/commit/cd3764f))

### ❤️ Contributors

- Patrick Raedler ([@Readpato](https://github.com/Readpato))

