export default {
    USERS: {
        MESSAGES: {
            ERROR: {
                USER_NOT_FOUND: `Usuário {USER_ID} não encontrado`,
                USER_ALREADY_EXISTS: `Usuário {USER_ID} já existe existe`,
                USER_UNAUTHENTICATED: `Dados incorretos. Usuário não autenticado.`,
                VOID_NAME: `O campo 'Nome' deve ser preenchido`,
                VOID_EMAIL: `O campo 'Email' deve ser preenchido`,
                VOID_PASSWORD: `O campo 'Senha' deve ser preenchido`,
                VOID_BIRTHDATE: `O campo 'Data de Nascimento' deve ser preenchido`,
                HEIGHY_NOT_NUMBER: `O campo 'Altura' deve ser um número`,
                WEIGHY_NOT_NUMBER: `O campo 'Peso' deve ser um número`,
                NUMBER_ADDRESS_NOT_NUMBER: `O campo 'Número' deve ser um número`,
                UNAUTHORIZED: `Usuário logado deve ser igual ao informado no parâmetro. Não autorizado.`,
                STATUS_NOT_TRUE: `Você precisa concordar com os Termos de Uso.`,
                REQUIRE_LOGIN: `Você precisa estar logado para executar essa ação.`
            }
        }
    },
    APPOINTMENTS: {
        MESSAGES: {
            ERROR: {
                REQUIRE_LOGIN: `Faça login para continuar.`,
                CRM_NOT_NUMBER: `O CRM do médico deve ser um número`,
                VOID_MEDICAL_SPECIALTIES: `O campo 'Especialidade Médica' deve ser preenchido`,
                VOID_DATE: `O campo 'Data' deve ser preenchido`,
                VOID_DOCTOR: `O campo 'Médico' deve ser preenchido`,
                VOID_HOSPITAL: `O campo 'Hospital' deve ser preenchido`
            }
        }
    },
    EXAMS: {
        MESSAGES: {
            ERROR: {
                REQUIRE_LOGIN: `Faça login para continuar.`,
                VOID_EXAM: `O campo 'Exame' deve ser preenchido`,
                VOID_DATE: `O campo 'Data' deve ser preenchido`,
                VOID_CLINIC: `O campo 'Local' deve ser preenchido`
            }
        }
    }
}