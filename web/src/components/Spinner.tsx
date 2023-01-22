import { Oval } from 'react-loader-spinner';

export function Spinner() {
  return (
    <div className="w-full flex justify-center items-center gap-2">
      <Oval
        height={30}
        width={30}
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#c4b5fd"
        strokeWidth={4}
        strokeWidthSecondary={4}
        color="#8b5cf6"
      />

      <p className="font-semibold">Carregando...</p>
    </div>
  );
}
