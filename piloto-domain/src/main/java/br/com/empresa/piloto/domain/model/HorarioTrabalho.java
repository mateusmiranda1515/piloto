/*
* Gerado automaticamente por GUMGAGenerator em 12/08/2015 11:46:52
*/


package br.com.empresa.piloto.domain.model;

import gumga.framework.domain.GumgaModel;
import gumga.framework.domain.GumgaMultitenancy;
import java.io.Serializable;
import java.util.*;
import java.math.BigDecimal;
import javax.persistence.*;
import gumga.framework.domain.domains.*;
import org.hibernate.annotations.Columns;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_HORARIOTRABALHO")
@Indexed
@Audited
@Entity
public class HorarioTrabalho extends GumgaModel<Long> implements Serializable {

    @Version
    private Integer version;


    //@Field //Descomente para ser utilizado na busca multientidades
    private DiaDaSemana dia;
    //@Field //Descomente para ser utilizado na busca multientidades
    private GumgaTime horarioInicial;
    //@Field //Descomente para ser utilizado na busca multientidades
    private GumgaTime horarioFinal;
    //@Field //Descomente para ser utilizado na busca multientidades
    private GumgaIP4 ip4;
    //@Field //Descomente para ser utilizado na busca multientidades
    private GumgaIP6 ip6;

    public HorarioTrabalho(){
    }

    public DiaDaSemana getDia() {
        return dia;
    }

    public void setDia(DiaDaSemana dia) {
        this.dia = dia;
    }

    public GumgaTime getHorarioInicial() {
        return horarioInicial;
    }

    public void setHorarioInicial(GumgaTime horarioInicial) {
        this.horarioInicial = horarioInicial;
    }

    public GumgaTime getHorarioFinal() {
        return horarioFinal;
    }

    public void setHorarioFinal(GumgaTime horarioFinal) {
        this.horarioFinal = horarioFinal;
    }

    public GumgaIP4 getIp4() {
        return ip4;
    }

    public void setIp4(GumgaIP4 ip4) {
        this.ip4 = ip4;
    }

    public GumgaIP6 getIp6() {
        return ip6;
    }

    public void setIp6(GumgaIP6 ip6) {
        this.ip6 = ip6;
    }

}
