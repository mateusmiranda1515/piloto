/*
* Gerado automaticamente por GUMGAGenerator em 12/08/2015 11:47:02
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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_MARCA")
@Indexed
@Audited
@Entity
public class Marca extends GumgaModel<Long> implements Serializable {

    @Version
    private Integer version;


    //@Field //Descomente para ser utilizado na busca multientidades
    private String nome;
    //@Field //Descomente para ser utilizado na busca multientidades
     @Columns(columns = {
     @Column(name = "location_latitude"),
     @Column(name = "location_longitude")
     })
    private GumgaGeoLocation location;

    public Marca(){
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public GumgaGeoLocation getLocation() {
        return location;
    }

    public void setLocation(GumgaGeoLocation location) {
        this.location = location;
    }

}
