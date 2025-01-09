"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { buildMatrix, fromFlatToMatrix, rotateMatrix } from "./utils/matrix";

type Matrix = number[][];

export default function Matrix() {
  const [matrix, setMatrix] = useState<Matrix>([]);
  const [rotatedMatrix, setRotatedMatrix] = useState<Matrix>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  const {
    register: registerMatrix,
    formState: { errors: errorsMatrix },
    handleSubmit: handleMatrixSubmit,
    reset: resetMatrixForm,
  } = useForm();

  const onSubmit = (form: Record<string, number>) => {
    const matrix = buildMatrix(form.dimension);
    setMatrix(matrix);
    resetMatrixForm();
    setRotatedMatrix([]);
  };

  const onMatrixSubmit = (form: Record<string, number>) => {
    const matrix = fromFlatToMatrix(form);
    const rotatedMatrix = rotateMatrix(matrix);
    setRotatedMatrix(rotatedMatrix);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label htmlFor="dimension" className="form__label">
            Dimensión
          </label>
          <input
            type="number"
            id="dimension"
            className={`form__input ${
              errors.dimension ? "form__input--error" : ""
            }`}
            {...register("dimension", {
              required: true,
              min: 1,
              max: 50,
              valueAsNumber: true,
            })}
          />
        </div>
        <input type="submit" className="form__button" value="Generar" />
      </form>

      {isSubmitted ? (
        <form className="form" onSubmit={handleMatrixSubmit(onMatrixSubmit)}>
          {matrix.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-row gap-2 mb-2">
              {row.map((value, colIndex) => (
                <input
                  type="number"
                  key={`${rowIndex}-${colIndex}`}
                  className={`form__input size-16 ${
                    errorsMatrix[`${rowIndex}-${colIndex}`]
                      ? "form__input--error"
                      : ""
                  }`}
                  {...registerMatrix(`${rowIndex}-${colIndex}`, {
                    required: true,
                    valueAsNumber: true,
                  })}
                  defaultValue={value}
                />
              ))}
            </div>
          ))}
          <input type="submit" className="form__button" value="Girar" />
        </form>
      ) : (
        ""
      )}

      <section className="mb-10">
        {rotatedMatrix.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row gap-2 mb-2">
            {row.map((value, colIndex) => (
              <input
                type="number"
                key={`ro-${rowIndex}-${colIndex}-${value}`}
                defaultValue={value}
                readOnly
                className="form__input size-16"
              />
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
