import LocalizedStrings from 'react-localization';

const Strings = new LocalizedStrings({
  pt_br: {
    yes: "Sim",
    no: "Não",
    send: "Enviar",
    footer: "©2018 Filho Sem Fila",
    loading: "Carregando",
    titleInspector: "Inspetor",
    titleInspectorTV: "Inspetor TV",
    login: {
      loginTitle: "Login",
      email: "Usuário",
      emailError: "Por favor, preencha seu usuário",
      password: "Senha",
      passwordError: "Por favor, preencha sua senha",      
      userNotFound: "Usuário e senha não encontrado",
    },
    messageErrors: {
      connectionError: "Erro de conexão! Por favor, tente novamente mais tarde ",
      unknownError: "Erro Desconhecido! Error no. {0}! " +
        "Por favor, tente novamente mais tarde",
      removeStudentError: "O(a) Aluno(a) {0} não pode ser retirado da fila. Tente novamente mais tarde",
      removeAuthError: "A Autorização {0} não pode ser removida. Tente novamente mais tarde",
      userTokenExpire: "Outro dispositivo realizou um login com a sua senha. "+
          " Por favor, verifique se há outra pessoa utilizando os mesmos dados de acesso " + 
          "que você. Por favor, vá ao menu e faça o logout e o login novamente.",
    },
    queue: {
      responsable: "Resp",
      calledByCMS: "Chamado pela Central WEB",
      plate: "Placa"
    },
    detailStudent: {
      message: "Mensagem",
      permanentAuth: "Autorizações permanentes",
      parent: "Resp. Principais",
      others: "Outros"
    },
    emergencyPopup:{
      title: "Pedido de emergência",
      grade: "Série",
      requirer: "Requerente"
    },
    detailSidebar:{
      title_auth:"Autorizações",
      title_studentDetail: "Informações do aluno"
    },
    showTempAuth: {
      from: "De",
      subject: "Assunto",
      close: "Fechar",
      sureRemoveItem: "Você deseja realmente deletar a autorização?",
      btRemove: "Remover",
      btCancel: "Cancelar",
    },
    modalInfo: {
      btYes: "Sim",
      btNo: "Não",
    },
    sendMessage: {
      send: "Enviar",
      messageEmptyError: 'Por favor, preencha a mensagem!',
      messageError: 'Não foi possível enviar a mensagem. Tente novamente mais tarde.',
      messageSuccess: 'A mensagem foi enviada com sucesso',
    },
    changePass:{
      title:"Alterar Idioma"
    },
    getLocation: {
      waiting: "Por favor aguarde, buscando localização",
      notAvaiable: "Você não está usando um navegador que permita buscar sua localização.",
      error: "Você negou a busca da posição do seu aplicativo. Ele é importante para a segurança da "+
            "informação. Por favor, permita a busca da localização do browser",
      notNear: "Verificamos sua posição e você não está apto a usar o aplicato. Por favor, " +
        "contate o suporte do aplicativo Lat: {0} / Long: {1}",
    },
    menu: {
      openFullScreen: "Abrir tela cheia",
      closeFullScreen: "Fechar tela cheia",
      signOut: "Logout"
    }    
  },
  en: {
    yes: "Yes",
    no: "No",
    send: "Send",
    footer: "©2018 Quick Pickup App",
    loading: "Loading",
    titleInspector: "Manage Lane",
    titleInspectorTV: "Manage Lane TV",
    login: {
      loginTitle: "Login",
      email: "User",
      emailError: "Please, fill your user",
      password: "Password",
      passwordError: "Please, fill your password",
      userNotFound: "User or password incorrect",
    },
    messageErrors: {
      connectionError: 'Connection error! Please, Try again later',
      unknownError: "Unknown error! Error no: {0}. Please, Try again later",
      removeStudentError: "The student {0} can not be removed from queue. Please, Try again later",
      removeAuthError: "The authorization {0} can not be removed. Please, Try again later",
      userTokenExpire: "Other device make a login with your password. " +
        " Please, check if there is other person using the same access data than you." +
        "Please, go to menu, logout and login again.",
    },
    queue: {
      responsable: "Parent",
      calledByCMS: "Called by CMS",
      plate: "Plate"
    },
    detailStudent: {
      message: "Message",
      permanentAuth: "Permanent Authorizations",
      parent: "Parents",
      others: "Others"
    },
    emergencyPopup: {
      title: "Emergency Request",
      grade: "Grade",
      requirer: "Applicant"
    },
    detailSidebar: {
      title_auth: "Authorizations",
      title_studentDetail: "Student's profile"
    },
    showTempAuth: {
      from: "From",
      subject: "Subject",
      close: "Close",
      sureRemoveItem: "Want to delete the authorization?",
      btRemove: "delete",
      btCancel: "Cancel",
    },
    modalInfo: {
      btYes: "Yes",
      btNo: "No",
    },
    sendMessage: {
      send: "Send",
      messageEmptyError: 'Please write a message!',
      messageError: 'Connection error. Please, Try again later.',
      messageSuccess: 'Successfully sent!',
    },
    changePass: {
      title: "Change Language"
    },
    getLocation: {
      waiting: "Please wait! We are getting your location.",
      notAvaiable: "Your browser does not permit getting your location.",
      error: "You have disabled the browser's location services. But " +
        "it is essential to information security so, please, enable it.",
      notNear: "You have disabled the browser's location services. But it is essential " +
        "to information security so, please, enable it. Lat: {0} / Long: {1}",
    },
    menu: {
      openFullScreen: "Open full screen",
      closeFullScreen: "Close full screen",
      signOut: "Logout"
    }
  },
  es: {
    yes: "Si",
    no: "No",
    send: "Enviar",
    footer: "©2018 Filho Sem Fila",
    loading: "Carregando",
    titleInspector: "Inspetor",
    titleInspectorTV: "Inspetor TV",
    login: {
      loginTitle: "Login",
      email: "Usuário",
      emailError: "Por favor, complete el usuário",
      password: "Contraseña",
      passwordError: "Por favor completar la contraseña",
      userNotFound: "Usuário o contraseña incorrectos",
    },
    messageErrors: {
      connectionError: "Error de conexión! Por favor, intente nuevamente más tarde. ",
      unknownError: "Error desconocido! Error no. {0}! " +
        "Por favor, intente nuevamente más tarde. ",
      removeStudentError: "El alumno {0} no puede ser retirado de la fila. Intente nuevamente más tarde.",
      removeAuthError: "El autorización {0}  no puede ser eliminada. intente nuevamente más tarde.",
      userTokenExpire: "Otro dispositivo ha iniciado sesión con su contraseña. " +
        " Por favor, verifique si hay otra persona utilizando los mismos datos de acceso " +
        "que usted. Por favor, vaya hasta el menu, haga logout y login nuevamente.",
    },
    queue: {
      responsable: "Resp",
      calledByCMS: "Llamado por Central WEB",
      plate: "Placa"
    },
    detailStudent: {
      message: "mensaje",
      permanentAuth: "Autorizaciones permanentes",
      parent: "Resp. Principais",
      others: "Otros"
    },
    emergencyPopup: {
      title: "Pedido de emergência",
      grade: "Grado",
      requirer: "Requiriente"
    },
    detailSidebar: {
      title_auth: "Autorizações",
      title_studentDetail: "Informaciones del alumno"
    },
    showTempAuth: {
      from: "De",
      subject: "Asunto",
      close: "Cerrar",
      sureRemoveItem: "Desea borrar el autorización?",
      btRemove: "borrar",
      btCancel: "Cancelar",
    },
    modalInfo: {
      btYes: "Si",
      btNo: "No",
    },
    sendMessage: {
      send: "Enviar",
      messageEmptyError: 'Favor completar un mensaje!',
      messageError: 'Error de conexión! Intente nuevamente más tarde.',
      messageSuccess: 'Mensaje enviado con Exito!',
    },
    changePass: {
      title: "Cambiar idioma"
    },
    getLocation: {
      waiting: "Por favor aguarde! Estamos buscando su posicionamento.",
      notAvaiable: "Usted no está usando um navegador que permita buscar sua localización.",
      error: "Usted nego la búsqueda de la posición de su aplicativo. El es importante para la seguridad de la información."
        + " Por favor, permita la búsqueda de la localización del browser",
      notNear: "Verificamos su posición y usted no está apto para usar el aplicativo. Por favor, " +
        "contacte con el soporte del aplicativo. Lat: {0} / Long: {1}",
    },
    menu: {
      openFullScreen: "Abrir pantalla completa",
      closeFullScreen: "Cerrar pantalla completa",
      signOut: "Logout"
    }
  }
});

export default Strings;
