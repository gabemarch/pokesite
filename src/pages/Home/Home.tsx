import { Field, Form, Formik } from 'formik';
import { Button } from '../../elements/Button';
import './Home.scss';
import { useDispatch } from 'react-redux';
import { getPokemonRequest, searchPokemon } from '../../shared/actions/pokemon';
import { useCallback } from 'react';

export const Home = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (value: any) => {
      if (value) {
        console.log('VALUE', searchPokemon(value))
        dispatch(searchPokemon(value));
        return;
      }
      dispatch(getPokemonRequest(1));
    },
    [dispatch],
  );

  const getAllPokemon = useCallback((value: number) => {
    dispatch(getPokemonRequest(value))
  },
    [dispatch],
  );

  return (
    <>
      <h1 className="home-title">PokéSite</h1>
      <div className="search">
        <Formik
          initialValues={{ search: '' }}
          onSubmit={(values) => {
            if (!values) {
              getAllPokemon(1);
              return
            }
            handleSubmit(values.search.toLowerCase());
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            touched,
            submitForm,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                className="search-input"
                type="text"
                name="search"
                placeholder='Search pokemon'
                value={values.search}
                onChange={handleChange}
              />
              <Button
                type="submit"
                data-testid="button"
                colorType="primary"
                className="search-button"
                text="Search"
                onClick={submitForm}
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}