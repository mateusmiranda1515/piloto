/*
* Gerado automaticamente por GUMGAGenerator em 12/08/2015 11:46:48
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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_PESSOA")
@Indexed
@Audited
@Entity
public class Pessoa extends GumgaModel<Long> implements Serializable {

    @Version
    private Integer version;


    //@Field //Descomente para ser utilizado na busca multientidades
    private String nome;
    //@Field //Descomente para ser utilizado na busca multientidades
    private GumgaEMail email;
    //@Field //Descomente para ser utilizado na busca multientidades
    private GumgaPhoneNumber telefone;
    //@Field //Descomente para ser utilizado na busca multientidades
     @Columns(columns = {
     @Column(name = "endereco_zip_code"),
     @Column(name = "endereco_premisse_type"),
     @Column(name = "endereco_premisse"),
     @Column(name = "endereco_number"),
     @Column(name = "endereco_information"),
     @Column(name = "endereco_neighbourhood"),
     @Column(name = "endereco_localization"),
     @Column(name = "endereco_state"),
     @Column(name = "endereco_country")
     })
    private GumgaAddress endereco;
    //@Field //Descomente para ser utilizado na busca multientidades
    private GumgaBoolean ativo;

    public Pessoa(){
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public GumgaEMail getEmail() {
        return email;
    }

    public void setEmail(GumgaEMail email) {
        this.email = email;
    }

    public GumgaPhoneNumber getTelefone() {
        return telefone;
    }

    public void setTelefone(GumgaPhoneNumber telefone) {
        this.telefone = telefone;
    }

    public GumgaAddress getEndereco() {
        return endereco;
    }

    public void setEndereco(GumgaAddress endereco) {
        this.endereco = endereco;
    }

    public GumgaBoolean getAtivo() {
        return ativo;
    }

    public void setAtivo(GumgaBoolean ativo) {
        this.ativo = ativo;
    }

}
