import clsx from "clsx";
import type { FC } from "react";
import { SolutionBlock } from "./SolutionBlock";

interface IProps {
  isOpen: boolean;
}

export const SolutionContent: FC<IProps> = ({ isOpen }) => {
  return (
    <div className={clsx(isOpen ? "block" : "hidden")}>
      <SolutionBlock
        content="**1. Основное условие**  
При повороте автомобиля на горизонтальной дороге центростремительную силу $ F_c $ обеспечивает сила трения покоя $ F_{\text{тр}} $:

$F_{\text{тр}} = F_c$"
      />

      <SolutionBlock
        content="**2. Уравнения сил**  
- Сила трения:  
  $F_{\text{тр}} = \mu N = \mu m g$
- Центростремительная сила:  
  $F_c = \frac{m v^2}{R}$"
      />

      <SolutionBlock
        content="**3. Вывод коэффициента трения $ \mu $**  
Приравниваем выражения для максимальной скорости $ v_{\text{max}} $:

$\mu m g = \frac{m v_{\text{max}}^2}{R}$

После сокращения массы $ m $:

$\mu g = \frac{v_{\text{max}}^2}{R}$
$\quad \Rightarrow \quad$
$\mu = \frac{v_{\text{max}}^2}{g R}$"
      />

      <SolutionBlock
        content="**4. Вычисления**  
Подставляем данные: $ v = 28 \, \text{м/с} $, $ R = 80  \text{м} $, $ g \approx 9{,}8 \, \text{м/с}^2 $:

$\mu = \frac{28^2}{9{,}8 \cdot 80}
= \frac{784}{784}
= 1$

**Ответ:** Коэффициент трения $ \mu = 1 $."
      />

      <SolutionBlock
        content="**5. Расчёт максимальной скорости для обледенелой дороги**  
При $ \mu = 0{,}1 $ используем ту же формулу:

$v_{\text{max}} = \sqrt{\mu g R}
= \sqrt{0{,}1 \cdot 9{,}8 \cdot 80}
= \sqrt{78{,}4}
\approx 8{,}85 \, \text{м/с}$

**Ответ для обледенелой дороги:**  
Максимальная скорость $ v_{\text{max}} \approx 8{,}9 \, \text{м/с} $ (или ≈ 32 км/ч)."
      />
    </div>
  );
};
