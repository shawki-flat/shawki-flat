# Shawki Flat API

Hold to Shawki Flat API. Where humble little page aids you by listing and describing all of our CSS properties, utilities, and UI components. Because we are just in our small beginning, if you want any more CSS features, whether CSS properties, utilities, or UI components, to be in our package, create a [new feature issue](https://github.com/shawki-flat/shawki-flat/issues/new/choose).

## Properties

- [Typography](#typography)
  - [Font Size](#font-size)
  - [Line Height](#line-height)
  - [Letter Spacing](#letter-spacing)
- [Aspect Ratio](#aspect-ratio)
- [Space](#space)
- [Ratio](#ratio)
  - [Percentage](#percentage-ratio)
  - [Screen Width](#screen-width-ratio)
  - [Screen Height](#screen-height-ratio)
- [Border and Border Radius](#border-and-border-radius)
  - [Border](#border)
  - [Border Radius](#border-radius-numeric)
    - [Numeric](#border-radius-numeric)
    - [Percentage](#border-radius-percentage)
- [Shadow](#shadow)
- [Transition](#transition)
- [Layer](#layer)

## Typography

Shawki Flat prepared an intelligent typography-based design system. We were so mindful of the actual properties and defined a handy and easy scale of essential typography properties. These property values are built to keep your typography elements like headings, paragraphs, and so on, consistent across your UI designs.

- [Font Size](#font-size)
- [Line Height](#line-height)
- [Letter Spacing](#letter-spacing)

### Font Size

| Properties         | Values     |
| ------------------ | ---------- |
| `--font-size-xs`   | `0.75rem`  |
| `--font-size-sm`   | `0.875rem` |
| `--font-size`      | `1rem`     |
| `--font-size-md`   | `1.25rem`  |
| `--font-size-lg`   | `1.5rem`   |
| `--font-size-xl-1` | `1.75rem`  |
| `--font-size-xl-2` | `2rem`     |
| `--font-size-xl-3` | `2.25rem`  |
| `--font-size-xl-4` | `3rem`     |
| `--font-size-xl-5` | `3.75rem`  |
| `--font-size-xl-6` | `4.5rem`   |
| `--font-size-xl-7` | `6rem`     |
| `--font-size-xl-8` | `7.5rem`   |

### Line Height

| Properties         | Values |
| ------------------ | ------ |
| `--line-height`    | `1`    |
| `--line-height-sm` | `1.2`  |
| `--line-height-md` | `1.4`  |
| `--line-height-lg` | `1.6`  |

### Letter Spacing

| Properties            | Values     |
| --------------------- | ---------- |
| `--letter-spacing-sm` | `0.125rem` |
| `--letter-spacing-md` | `0.25rem`  |
| `--letter-spacing-lg` | `0.5rem`   |

## Aspect Ratio

It is one of our favorite CSS properties. It helps when creating responsive images with a ratio between width and height. The alternative was the `height` and `padding-top` / `padding-bottom` trick, which we might add to the upcoming UI components.

| Properties                   | Values  |
| ---------------------------- | ------- |
| `--aspect-ratio-square`      | `1 / 1` |
| `--aspect-ratio-landscape`   | `3 / 2` |
| `--aspect-ratio-portrait`    | `3 / 4` |
| `--aspect-ratio-wide-screen` | `2 / 1` |

## Space

Naming these properties with these names was the most argument problem we faced while building the package. The first time you see it, you will think they are just for padding and margin. But in fact, you can use them for:

- Width
- Height
- Top / Bottom
- Left / Right
- Border

| Properties   | Values    | Properties   | Values     |
| ------------ | --------- | ------------ | ---------- |
| `--space-0`  | `0rem`    | `--space-23` | `5.75rem`  |
| `--space-1`  | `0.25rem` | `--space-24` | `6rem`     |
| `--space-2`  | `0.5rem`  | `--space-25` | `6.25rem`  |
| `--space-3`  | `0.75rem` | `--space-26` | `6.5rem`   |
| `--space-4`  | `1rem`    | `--space-27` | `6.75rem`  |
| `--space-5`  | `1.25rem` | `--space-28` | `7rem`     |
| `--space-6`  | `1.5rem`  | `--space-29` | `7.25rem`  |
| `--space-7`  | `1.75rem` | `--space-30` | `7.5rem`   |
| `--space-8`  | `2rem`    | `--space-31` | `7.75rem`  |
| `--space-9`  | `2.25rem` | `--space-32` | `8rem`     |
| `--space-10` | `2.5rem`  | `--space-33` | `8.25rem`  |
| `--space-11` | `2.75rem` | `--space-34` | `8.5rem`   |
| `--space-12` | `3rem`    | `--space-35` | `8.75rem`  |
| `--space-13` | `3.25rem` | `--space-36` | `9rem`     |
| `--space-14` | `3.5rem`  | `--space-37` | `9.25rem`  |
| `--space-15` | `3.75rem` | `--space-38` | `9.5rem`   |
| `--space-16` | `4rem`    | `--space-39` | `9.75rem`  |
| `--space-17` | `4.25rem` | `--space-40` | `10rem`    |
| `--space-18` | `4.5rem`  | `--space-41` | `10.25rem` |
| `--space-19` | `4.75rem` | `--space-42` | `10.5rem`  |
| `--space-20` | `5rem`    | `--space-43` | `10.75rem` |
| `--space-21` | `5.25rem` | `--space-44` | `11rem`    |
| `--space-22` | `5.5rem`  | `--space-45` | `11.25rem` |

## Ratio

Every CSS developer uses ratio in his/her UI designs, whether it is a percentage ratio or a screen's width and height ratio. It is incredibly useful in multiple parts of the design process. So, we have prepared a list of percentage, screen width, and screen height properties to help you rapidly build your UI design.

- [Percentage Ratio](#percentage-ratio)
- [Screen Width Ratio](#screen-width-ratio)
- [Screen Height Ratio](#screen-height-ratio)

### Percentage Ratio

| Properties               | Values |
| ------------------------ | ------ |
| `--ratio-percentage-1-5` | `20%`  |
| `--ratio-percentage-2-5` | `40%`  |
| `--ratio-percentage-3-5` | `60%`  |
| `--ratio-percentage-4-5` | `80%`  |
| `--ratio-percentage-1-4` | `25%`  |
| `--ratio-percentage-3-4` | `75%`  |
| `--ratio-percentage-1-2` | `50%`  |
| `--ratio-percentage-1-1` | `100%` |

### Screen Width Ratio

| Properties                 | Values  |
| -------------------------- | ------- |
| `--ratio-screen-width-1-5` | `20vw`  |
| `--ratio-screen-width-2-5` | `40vw`  |
| `--ratio-screen-width-3-5` | `60vw`  |
| `--ratio-screen-width-4-5` | `80vw`  |
| `--ratio-screen-width-1-4` | `25vw`  |
| `--ratio-screen-width-3-4` | `75vw`  |
| `--ratio-screen-width-1-2` | `50vw`  |
| `--ratio-screen-width-1-1` | `100vw` |

### Screen Height Ratio

| Properties                  | Values  |
| --------------------------- | ------- |
| `--ratio-screen-height-1-5` | `20vh`  |
| `--ratio-screen-height-2-5` | `40vh`  |
| `--ratio-screen-height-3-5` | `60vh`  |
| `--ratio-screen-height-4-5` | `80vh`  |
| `--ratio-screen-height-1-4` | `25vh`  |
| `--ratio-screen-height-3-4` | `75vh`  |
| `--ratio-screen-height-1-2` | `50vh`  |
| `--ratio-screen-height-1-1` | `100vh` |

## Border and Border Radius

Using border and border radius with CSS custom properties is so great. We are working on them, and great features are still on the way. So far, we have defined two main categories for CSS properties. But, more of them are coming soon with our UI component.

- [Border](#border)
- [Border Radius](#border-radius-numeric)

### Border

| Properties   | Values      |
| ------------ | ----------- |
| `--border-0` | `0rem`      |
| `--border-1` | `0.0625rem` |
| `--border-2` | `0.125rem`  |
| `--border-3` | `0.25rem`   |
| `--border-4` | `0.5rem`    |

### Border Radius (Numeric)

| Properties                 | Values     |
| -------------------------- | ---------- |
| `--border-radius-extra-sm` | `0.125rem` |
| `--border-radius-sm`       | `0.25rem`  |
| `--border-radius`          | `0.5rem`   |
| `--border-radius-md`       | `1rem`     |
| `--border-radius-lg`       | `1.25rem`  |
| `--border-radius-xl-1`     | `1.5rem`   |
| `--border-radius-xl-2`     | `2.5rem`   |

### Border Radius (Percentage)

| Properties            | Values |
| --------------------- | ------ |
| `--border-radius-1-2` | `50%`  |
| `--border-radius-1-1` | `100%` |

## Shadow

Box shadow is so incredible. Many design systems rely on it while implementing their designs because it adds realism. So, for sure, we have added it to our package, and we are working on colored and blurred ones which will blow up your minds. Enjoy!

| Properties        | Values                                         |
| ----------------- | ---------------------------------------------- |
| `--box-shadow-xs` | `0 0.125rem 0.125rem 0 rgba(20, 20, 20, 0.05)` |
| `--box-shadow-sm` | `0 0.25rem 0.25rem 0 rgba(20, 20, 20, 0.05)`   |
| `--box-shadow`    | `0 0.5rem 0.5rem 0 rgba(20, 20, 20, 0.05)`     |
| `--box-shadow-md` | `0 1.25rem 1.25rem 0 rgba(20, 20, 20, 0.05)`   |
| `--box-shadow-lg` | `0 1.5rem 2.5rem 0 rgba(20, 20, 20, 0.05)`     |
| `--box-shadow-xl` | `0 2.5rem 5rem 0 rgba(20, 20, 20, 0.05)`       |

## Transition

Finally, we have some motion in the package, of course, we should have! But hmm, it is just a minimal amount of properties, but for sure, we have more and more. It is just a matter of time, and we will have complete transition and animation properties.

| Properties                      | Values                 |
| ------------------------------- | ---------------------- |
| `--transition-ease-slow`        | `all 0.8s ease`        |
| `--transition-ease`             | `all 0.4s ease`        |
| `--transition-ease-fast`        | `all 0.2s ease`        |
| `--transition-ease-in-slow`     | `all 0.8s ease-in`     |
| `--transition-ease-in`          | `all 0.4s ease-in`     |
| `--transition-ease-in-fast`     | `all 0.2s ease-in`     |
| `--transition-ease-out-slow`    | `all 0.8s ease-out`    |
| `--transition-ease-out`         | `all 0.4s ease-out`    |
| `--transition-ease-out-fast`    | `all 0.2s ease-out`    |
| `--transition-ease-in-out-slow` | `all 0.8s ease-in-out` |
| `--transition-ease-in-out`      | `all 0.4s ease-in-out` |
| `--transition-ease-in-out-fast` | `all 0.2s ease-in-out` |

## Layer

Who does not use `position` and `z-index` layers? It is one of the most common ways to center a `div` in HTML you know 😅 Just kidding, we have provided a set of scales of `z-index` layers that prevent you from using magic numbers in your CSS rules. Sound convincing? Use them!

| Properties  | Values |
| ----------- | ------ |
| `--layer-1` | `1`    |
| `--layer-2` | `2`    |
| `--layer-3` | `3`    |
| `--layer-4` | `4`    |
| `--layer-5` | `5`    |
| `--layer-6` | `6`    |
| `--layer-7` | `7`    |
| `--layer-8` | `8`    |
| `--layer-9` | `9`    |

## Utilities

- [Media](#media)
  - [Media Values](#media-values)
  - [Media Declaration](#media-declaration)
  - [Media Supported Utilities](#media-supported-utilities)
- [Layout](#layout-utilities)
  - [Layout Values](#layout-values)
  - [Layout Declaration](#layout-declaration)
- [Typography Utilities](#typography-utilities)
  - [Typography Declaration](#typography-declaration)
- [Padding and Margin Utilities](#padding-and-margin-utilities)
  - [Padding and Margin Declaration](#padding-and-margin-declaration)
- [Other Utilities](#other-utilities)
  - [Utilities Declaration](#utilities-declaration)
- [UI Components](#ui-components)

## Media

Media is one of our main package features! Depending on it, we were able to provide you with scalable layout properties, utilities, and UI components to use in your feature design projects. You can use the @ symbol followed by the / sign and the utility class that has media variants supporting it.

### Media Values

| Media  | Values   |
| ------ | -------- |
| `sm`   | `576px`  |
| `md`   | `768px`  |
| `lg`   | `992px`  |
| `xl-1` | `1200px` |
| `xl-2` | `1400px` |

### Media Declaration

| Media                  | Declarations                  |
| ---------------------- | ----------------------------- |
| `sm-{utility-class}`   | `@media (min-width: 36rem)`   |
| `md-{utility-class}`   | `@media (min-width: 48rem)`   |
| `lg-{utility-class}`   | `@media (min-width: 62rem)`   |
| `xl-1-{utility-class}` | `@media (min-width: 75rem)`   |
| `xl-2-{utility-class}` | `@media (min-width: 87.5rem)` |

### Media Supported Utilities

| Utilities         | Usage                             |
| ----------------- | --------------------------------- |
| `display`         | `{media}-display-{value}`         |
| `flex-direction`  | `{media}-flex-direction-{value}`  |
| `justify-content` | `{media}-justify-content-{value}` |
| `align-items`     | `{media}-align-items-{value}`     |
| `container`       | `{media}-container`               |
| `gap`             | `{media}-gap-{value}`             |
| `gap-x`           | `{media}-gap-x-{value}`           |
| `gap-y`           | `{media}-gap-y-{value}`           |

## Layout Utilities

We prepared a minimal amount of layout properties that include `display`, `flex-direction`, `justify-content`, and `align-items` in addition to their media utilities, of course, these base utilities will help you control the layout behavior of your website elements easily.

### Layout Values

- **Display Property**
  - `inline`
  - `block`
  - `inline-block`
  - `flex`
  - `grid`
  - `none`
- **Flex Direction Property**
  - `row`
  - `row-reverse`
  - `column`
  - `column-reverse`
- **Justify Content Property**
  - `baseline`
  - `stretch`
  - `center`
  - `flex-start`
  - `flex-end`
  - `space-around`
  - `space-between`
  - `space-evenly`
- **Align Items Property**
  - `baseline`
  - `stretch`
  - `center`
  - `flex-start`
  - `flex-end`

### Layout Declaration

| Utilities                 | Declaration                                           |
| ------------------------- | ----------------------------------------------------- |
| `display-{value}`         | `.display-{value} { display: value }`                 |
| `flex-direction-{value}`  | `.flex-direction-{value} { flex-direction: value }`   |
| `justify-content-{value}` | `.justify-content-{value} { justify-content: value }` |
| `align-items-{value}`     | `.align-items-{value} { align-items: value }`         |

## Typography Utilities

Our typography utilities are as intelligent as our typography properties. There is nothing new and fancy here, using the same names, and the same values, but instead of CSS custom properties, they are CSS classes!

### Typography Declaration

| Utilities                | Declaration                                         |
| ------------------------ | --------------------------------------------------- |
| `font-size-{value}`      | `.font-size-{value} { font-size: value }`           |
| `font-weight-{value}`    | `.font-weight-{value} { font-weight: value }`       |
| `line-height-{value}`    | `.line-height-{value} { line-height: value }`       |
| `letter-spacing-{value}` | `.letter-spacing-{value} { letter-spacing: value }` |

## Padding and Margin Utilities

Using the same values from our space properties, we could generate padding and margin utilities for this package. You can use these two properties in all possible directions, top, right, bottom, and left, in addition to the x-axis and y-axis.

### Padding and Margin Declaration

| Utilities    | Declaration                                                 |
| ------------ | ----------------------------------------------------------- |
| `p-{value}`  | `.p-{value} { padding: value }`                             |
| `px-{value}` | `.px-{value} { padding-right: value; padding-left: value }` |
| `py-{value}` | `.py-{value} { padding-top: value; padding-bottom: value }` |
| `pt-{value}` | `.pt-{value} { padding-top: value }`                        |
| `pr-{value}` | `.pr-{value} { padding-right: value }`                      |
| `pb-{value}` | `.pb-{value} { padding-bottom: value }`                     |
| `pl-{value}` | `.pl-{value} { padding-left: value }`                       |
| `m-{value}`  | `.m-{value} { margin: value }`                              |
| `mx-{value}` | `.mx-{value} { margin-right: value; margin-left: value }`   |
| `my-{value}` | `.my-{value} { margin-top: value; margin-bottom: value }`   |
| `mt-{value}` | `.mt-{value} { margin-top: value }`                         |
| `mr-{value}` | `.mr-{value} { margin-right: value }`                       |
| `mb-{value}` | `.mb-{value} { margin-bottom: value }`                      |
| `ml-{value}` | `.ml-{value} { margin-left: value }`                        |

## Other Utilities

The reset utilities are the same as the CSS properties values. Use their values as CSS utilities, and everything should go as wanted, `border-radius`, `shadow`, `transition`, and `layer` all are available as CSS utilities.

### Utilities Declaration

| Utilities               | Declaration                                       |
| ----------------------- | ------------------------------------------------- |
| `border-radius-{value}` | `.border-radius-{value} { border-radius: value }` |
| `box-shadow-{value}`    | `.box-shadow-{value} { box-shadow: value }`       |
| `transition-{value}`    | `.transition-{value} { transition: value }`       |
| `layer-{value}`         | `.layer-{value} { z-index: value }`               |

## UI Components

We have a list of UI components that are great enough to create specific documentation for them, but we did not create that documentation yet, so, please give us the time until we finish creating it, and feel free to use any component class from this components list.

- **Display Components**:
  - `display-1`
  - `display-2`
  - `display-3`
  - `display-4`
  - `display-5`
  - `display-6`
- **Heading Components**:
  - `heading-1`
  - `heading-2`
  - `heading-3`
  - `heading-4`
  - `heading-5`
  - `heading-6`
- **Overline Components**:
  - `overline`
  - `overline-uppercase`
- **Paragraph Components**:
  - `paragraph`
  - `paragraph-large`
- **Other Typography Components**:
  - `small`
  - `strong`
  - `emphasis`
  - `highlight`
  - `text-truncate`
- **Layout Components**:
  - `container`
  - `grid-columns-{1-12}`
  - `grid-rows-{1-12}`
  - `column-span-{1-12}`
  - `column-start-{1-13}`
  - `column-end-{1-13}`
  - `row-span-{1-12}`
  - `row-start-{1-13}`
  - `row-end-{1-13}`
  - `gap-{space-value}`
  - `gap-x-{space-value}`
  - `gap-y-{space-value}`

## Request a Feature

If you have reached this paragraph, you might have some additional properties or utilities you are looking for them. If you want to let us know what you are looking for, please create a [new feature issue](https://github.com/shawki-flat/shawki-flat/issues/new/choose).
