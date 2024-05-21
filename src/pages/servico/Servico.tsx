import './servico.css';

export default function Servico() {
  return (
    <div className='servico'>
            <div className='servicoTitulo'>
                SERVICO
            </div>
            <div className='linha'></div>
            <div className="perfilExperiencia">
                <div className="perfilProfissional">
                    <p className='perfilTitiloExperiencia'>Experiência Profissional Básico:</p>
                    <ul>
                        <li>
                            Formatação e Instalação (Windows e Linux)
                        </li>
                        <li>
                            Instalação de Programas
                        </li>
                        <li>
                            Backup de Arquivos
                        </li>
                        <li>
                            Instalação e Configuração de Impresssoras
                        </li>
                        <li>
                            Assistẽncia e Suporte na Compra (Desktop e Notebook)
                        </li>
                        <li>
                            Verificação de Antivirus
                        </li>
                        <li>
                            Instalação básica de cabeamento de rede e configuração de rede
                        </li>
                    </ul>
                </div>
                <div className="perfilDesenvolvimento">
                    <p className='perfilTitiloExperiencia'>Experiência Desenvolviimento Básico:</p>
                    <ul>
                        <li>
                            FrontEnd com ReactJs
                        </li>
                    </ul>
                </div>
                <div className="perfilAdministração">
                    <p className='perfilTitiloExperiencia'>Experiência na área de Administração Básica:</p>
                    <ul>
                        <li>
                            Administração Financeira
                        </li>
                        <li>
                            Microsoft Office Excel
                        </li>
                        <li>
                            Administração da Produção e Logística
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}
