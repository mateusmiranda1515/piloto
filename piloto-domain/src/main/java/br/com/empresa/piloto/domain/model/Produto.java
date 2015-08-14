/*
* Gerado automaticamente por GUMGAGenerator em 12/08/2015 11:46:59
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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_PRODUTO")
@Indexed
@Audited
@Entity
public class Produto extends GumgaModel<Long> implements Serializable {

    @Version
    private Integer version;


    //@Field //Descomente para ser utilizado na busca multientidades
    private String nome;
    //@Field //Descomente para ser utilizado na busca multientidades
    private GumgaMoney valor;
    //@Field //Descomente para ser utilizado na busca multientidades
    private Integer quantidade;
    //@Field //Descomente para ser utilizado na busca multientidades
    @ManyToOne
    private Marca marca;

    public Produto(){
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public GumgaMoney getValor() {
        return valor;
    }

    public void setValor(GumgaMoney valor) {
        this.valor = valor;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public Marca getMarca() {
        return marca;
    }

    public void setMarca(Marca marca) {
        this.marca = marca;
    }

}
