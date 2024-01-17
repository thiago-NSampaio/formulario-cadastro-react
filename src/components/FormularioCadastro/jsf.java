public interface EnvioEmail {
    String montarHtml();

    boolean isUsuarioInterno(String destinatario);

    Integer enviarDestinatario(String destinatario);

    List<Integer> enviarGrupo(List<String> destinatarios);
}